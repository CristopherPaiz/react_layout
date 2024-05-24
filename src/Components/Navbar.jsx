import MainContext from "../Context/MainContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLogin, suma, setIsLogin } = useContext(MainContext);
  return (
    <div className="pnb">
      <article className="anb">
        <span className="twn">Navbar de ejemplo {suma !== 0 && " | Suma:" + suma}</span>
        <div className="fgn">
          {isLogin ? (
            <>
              <Link to={"/"} className="bbn">
                Inicio
              </Link>

              <Link to={"/profile"} className="bbn">
                Perfil
              </Link>

              <Link onClick={() => setIsLogin(false)} to={"/"} className="brn">
                Cerrar Sesión
              </Link>
            </>
          ) : (
            <Link to={"/login"} className="bbn">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};

export default Navbar;
