import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiDiscord } from "react-icons/si";

const ProfileCard = ({ user, dbUser }: any) => {
  return (
    <div className="flex flex-col items-center p-6 space-x-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-row items-center">
        <Image src={user.picture} alt="user pfp" width={128} height={128} />
        <div className="ml-5 flex flex-col">
          <h1 className=" text-center font-montseratCustom font-semibold">
            Hola {user.name}
          </h1>

          <div className="flex">
            <Link replace={false} href={"https://discord.gg/HuWU6rxYSt"}>
              <a target="_blank" rel="noreferrer">
                <SiDiscord size={40} className="mt-5" color="#5865F2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
