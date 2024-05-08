import MainContext from "../Context/MainContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLogin, suma, setIsLogin } = useContext(MainContext);
  return (
    <div className="w-full bg-slate-400 fixed top-0">
      <article className="flex justify-between items-center w-full h-full p-2">
        <span className="text-white font-bold">Navbar de ejemplo {suma !== 0 && " | Suma:" + suma}</span>
        <div className="flex gap-2">
          {isLogin ? (
            <>
              <Link to={"/"} className="bg-blue-500 text-white py-2 px-6 rounded-md mr-5">
                Inicio
              </Link>

              <Link to={"/profile"} className="bg-blue-500 text-white py-2 px-6 rounded-md mr-5">
                Perfil
              </Link>

              <Link
                onClick={() => setIsLogin(false)}
                to={"/"}
                className="bg-red-500 text-white py-2 px-6 rounded-md mr-5"
              >
                Cerrar Sesión
              </Link>
            </>
          ) : (
            <Link to={"/login"} className="bg-blue-500 text-white py-2 px-6 rounded-md mr-5">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};

export default Navbar;
