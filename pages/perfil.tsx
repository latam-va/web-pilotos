/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Image from "next/image";
import SidebarLayout from "../Layouts/SidebarLayout";
import auth0 from "../utils/auth0";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import LoginComponent from "../components/Login/LoginComponent";
import ProfileComponent from "../components/Profile/ProfileComponent";
import session from "@auth0/nextjs-auth0/dist/session/session";
import axios from "axios";

const Profile: NextPage = ({ user, dbUser }: any) => {
  if (user) {
    return (
      <>
        <Sidebar user={user} />
        <div className="overflow-hidden">
          <ProfileComponent user={user} />
        </div>
      </>
    );
  }

  return <LoginComponent />;
};

export async function getServerSideProps(context: any) {
  const session: any = await auth0.getSession(context.req, context.res);

  /* return {
    props: {
      user: session?.user || null,
    },
  }; */

  return {
    props: {
      user: {
        given_name: "Francisco",
        family_name: "González",
        nickname: "frangc0206",
        name: "Francisco González",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GhMYD7_chV82CJIK3xUcwrjqceg09pEG6eD35_l=s96-c",
        locale: "en-GB",
        updated_at: "2022-02-08T00:47:37.022Z",
        sub: "google-oauth2|116297160630353303637",
      },
    },
  };
}

export default Profile;
