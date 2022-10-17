import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentProject } from "../../utils/data/getData";

import Northprim from "./Northprim";
import OwnNew from "./OwnNew";

import ProjectHero from "../../components/ProjectHero";
import Outro from "../../components/Outro";

function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(getCurrentProject(projectId));
  }, [projectId]);

  const renderPage = () => {
    switch (projectId) {
      case "northprim":
        return <Northprim />;
      case "ownnew":
        return <OwnNew />;
      default:
        return null;
    }
  };
  return (
    <div>
      {project && (
        <>
          <ProjectHero project={project} />
          {renderPage()}
          <Outro />
        </>
      )}
    </div>
  );
}

export default Project;
