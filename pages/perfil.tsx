/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Image from "next/image";
import SidebarLayout from "../Layouts/SidebarLayout";
import { IUser } from "../types/IUser";
import auth0 from "../utils/auth0";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile: NextPage = ({ user }: any) => {
  const router = useRouter();

  console.log(user);

  return (
    <>
      <SidebarLayout user={user}>
        {user ? (
          <div className="flex ml-24">
            <h1>Hola {user.name}</h1>
            <Image
              src={user.picture}
              alt="user picture"
              width={"124"}
              height={"124"}
            />
          </div>
        ) : (
          <></>
        )}
      </SidebarLayout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await auth0.getSession(context.req, context.res);

  return {
    props: {
      user: session?.user || null,
    },
  };
}

export default Profile;
