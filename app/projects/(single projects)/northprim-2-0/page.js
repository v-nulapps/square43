import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";
import Brand from "./ui/Brand";
import Colors from "./ui/Colors";
import Parallax from "./ui/Parallax";
import Elements from "./ui/Elements";
import Elements2 from "./ui/Elements2";
import WebDesign from "./ui/WebDesign";
import Mobile from "./ui/Mobile";
import WebDev from "./ui/WebDev";

import Image from "next/image";

export const metadata = getProjectMeta("northprim-2-0");

export default async function Page() {
  const project = await getCurrentProject("northprim-2-0");
  const nextProject = await getNextProject();

  return (
    <div className="Northprim2">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Brand />
      <Colors />
      <Parallax />
      <Elements />
      <Elements2 />
      <WebDesign />
      <Mobile />
      <WebDev />
      {/* Content ends here */}
      <div className="relative">
        <Image
          src="/images/northprim2/blur6.webp"
          alt="Decorative background"
          width={1080}
          height={2151}
          className="max-w-none w-[1080px] absolute right-0 bottom-[40%] translate-y-1/2"
        />
        <Image
          src="/images/northprim2/saturn2.webp"
          alt="Decorative background"
          width={298}
          height={174}
          className="absolute right-[170px] top-0"
        />
        <Result project={project} />
      </div>
      <Outro project={nextProject} />
    </div>
  );
}
