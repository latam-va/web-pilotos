import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

const IndexComponent = ({ user }: any) => {
  return (
    <div className="flex flex-col ml-20 bg-no-repeat bg-center bg-cover text-center items-center justify-center w-full h-fit min-h-screen bg-index-blurry">
      <h1 className="text-2xl text-center text-white font-montseratCustom">
        Bienvenido a LATAM Argentina Virtual <b>{user.name}</b>
      </h1>
      <p className="max-w-md font-semibold mr-10 text-white mt-5 font-montseratCustom">
        Esperamos que disfrutes tu estadia con nosotros, en{" "}
        <Link href={"/perfil"}>
          <a className="text-blue-700 hover:text-blue-800">tu perfil</a>
        </Link>{" "}
        vas a encontrar toda la informacion que necesitas para empezar a volar y
        tambien vas a encontar la invitacion a nuestro Discord
      </p>
    </div>
  );
};

export default IndexComponent;
