import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarLayout from "../Layouts/SidebarLayout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import auth0 from "../utils/auth0";
import { json } from "stream/consumers";

const Home: NextPage = ({ user }: any) => {
  return <SidebarLayout user={user}>
    <p className="ml-24">{JSON.stringify(user)}</p>
  </SidebarLayout>
};

export async function getServerSideProps(context: any) {

  const session = await auth0.getSession(context.req, context.res)

  return {
    props: {
      user: session?.user || null,
    },
  };
}

export default Home;
