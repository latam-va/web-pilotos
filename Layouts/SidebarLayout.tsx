import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const SidebarLayout = ({ children, user }: any) => {
  return (
    <>
      <Head>
        <title>Pilotos LATAM Argentina Virtual</title>
      </Head>

      <main>
        <Sidebar user={user} />
      </main>
    </>
  );
};

export default SidebarLayout;
