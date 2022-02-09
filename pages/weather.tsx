import { NextPage } from "next";
import React from "react";
import LoginComponent from "../components/Login/LoginComponent";
import Sidebar from "../components/Sidebar/Sidebar";
import WeatherComponent from "../components/WX/WeatherComponent";
import { User } from "../types/IUser";
import auth0 from "../utils/auth0";

const WeatherPage: NextPage = ({ user }: any) => {
  if (user) {
    return (
      <>
        <Sidebar user={user} />
        <div className="flex overflow-hidden">
          <WeatherComponent />
        </div>
      </>
    );
  }

  return <LoginComponent />;
};

export async function getServerSideProps(context: any) {
  const session = await auth0.getSession(context.req, context.res);

  return {
    props: {
      user: session?.user || null,
    },
  };

  /* return {
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
  }; */
}

export default WeatherPage;
