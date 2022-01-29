import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiPlanePilot } from "react-icons/gi";
import { FaRegPaperPlane, FaToolbox } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import Link from "next/link";

const Sidebar = ({ user }: any) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      {user ? (
        <>
          <SidebarIcon
            icon={<TiWeatherCloudy size={"28"} />}
            text="Reportes meteorologicos"
            link="/weather"
          />
          <SidebarIcon
            icon={<GiPlanePilot size={"28"} />}
            text="Perfil"
            link="/perfil"
          />
          <SidebarIcon
            icon={<FaRegPaperPlane size={"28"} />}
            text="Crear plan de vuelo"
            link="/fpl"
          />
          <SidebarIcon
            icon={<BsFillPencilFill size={"28"} />}
            text="Reportar Vuelo"
            link="/pirep"
          />
          <SidebarIcon
            icon={<FaToolbox size={"28"} />}
            text="Acceso administrador"
            link="/admin"
          />
          <SidebarIcon
            icon={<FiLogOut size={"28"} />}
            text="Cerrar Sesion"
            link="/api/logout"
          />
        </>
      ) : (
        <SidebarIcon
          icon={<FiLogIn size={"28"} />}
          text="Iniciar Sesion"
          link="/api/login"
        />
      )}
    </div>
  );
};

const SidebarIcon = ({
  icon,
  text,
  link,
}: {
  icon: any;
  text: string;
  link: string;
}) => {
  return (
    <div className="sidebar-icon group">
      <Link href={link}>{icon}</Link>
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
