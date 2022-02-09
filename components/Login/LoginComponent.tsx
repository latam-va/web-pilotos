import React from "react";
import Router from "next/router";

const LoginComponent = () => {
  return (
      <div className="flex flex-col w-full h-screen bg-zinc-200 items-center justify-center">
          <h1 className="font-montseratCustom text-xl mb-10">Para acceder a esta pagina es necesario que inicies sesion</h1>
          <button className="font-montseratCustom text-gray-200 border-2 p-2 bg-blue-700 rounded-2xl" onClick={() => Router.push('/api/login')}>Iniciar Sesion</button>
      </div>
  )
};

export default LoginComponent;
