import React from "react";

import Head from "next/head";
import ServiceList from "../../pages-sections/services/ServiceList";
import Taglines from "../../pages-sections/services/Taglines";
import Achievements from "../../pages-sections/services/Achievements";

function Services() {
  return (
    <div>
      <Head>
        <title>Square43 Studio | Services</title>
        <meta name="description" content="Let us paint you a picture" />
      </Head>
      <main>
        <ServiceList />
        <Taglines />
        <Achievements />
      </main>
    </div>
  );
}

export default Services;
