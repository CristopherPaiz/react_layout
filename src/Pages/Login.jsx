import { useContext, useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import MainContext from "../Context/MainContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLogin, setIsLogin, setActiveuser } = useContext(MainContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // crear useNavigate
  const navigate = useNavigate();

  // Redirigir si ya está logueado
  useEffect(() => {
    if (isLogin) {
      navigate("/profile");
    }
  }, [isLogin, navigate]);

  //hacer algo si login usando UseContext
  if (isLogin) {
    return (
      <>
        <h1 className="mb-5">Ya estas logueado</h1>
        <Link className="bbn" to={"/"}>
          Ve al inicio
        </Link>
        <Link onClick={() => setIsLogin(false)} to={"/"} className="brn">
          Cerrar sesión
        </Link>
      </>
    );
  }

  //Manejar el Login
  const handleLogin = () => {
    if (user !== "" && pass !== "") {
      setActiveuser(user);
      setIsLogin(true);
    }
  };

  //Si no está login pues muestra el login
  return (
    <MainLayout>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900">LOGIN</span>
          <div className="w-full bg-white rounded-lg shadow dark:border mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
                Inicia sesión con tu cuenta
              </h1>
              <article className="space-y-4" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="nombre@empresa.com"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-primary-600 hover:underline cursor-pointer">
                    ¿Olvidaste la contraseña?
                  </span>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full text-white bg-gray-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Iniciar Sesión
                </button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Login;
