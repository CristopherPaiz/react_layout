import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //VARIBALES
  const [isLogin, setIsLogin] = useState(false);
  const [suma, setSuma] = useState(0);
  const [userRutas, setUserRutas] = useState([]);

  //LOGICA
  const sumar = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    setSuma(a + b);
  };

  //Si !isLogin suma = 0
  useEffect(() => {
    if (!isLogin) {
      setSuma(0);
    }
  }, [isLogin]);

  // Logica de manejo de rutas a JSON
  const rutasAJson = (rutas) => {
    let estructura = {};

    rutas.forEach((ruta) => {
      let niveles = ruta.split("/");
      let nivelActual = estructura;

      niveles.forEach((nivel, index) => {
        if (index === niveles.length - 1) {
          nivelActual[nivel] = true;
        } else {
          if (!nivelActual[nivel]) {
            nivelActual[nivel] = {};
          }

          nivelActual = nivelActual[nivel];
        }
      });
    });
    // Una vez se parsee todo el array de rutas, se retorna el objeto como un JSON
    return JSON.stringify(estructura);
  };

  //Se llama a la función rutasAJson y se le pasa el array de rutas
  useEffect(() => {
    //cuando el user login
    if (isLogin) {
      let USUARIO1 = [
        "gerencia/asignacion_horario/listado",
        "banco/bancoSpirit/add",
        "banco/bancoSpirit/delete",
        "banco/bancoSpirit/update",
        "contabilidad/rrhh/add",
        "contabilidad/rrhh/update",
        "contabilidad/monitoreo/add",
      ];

      // let USUARIO2 = ["contabilidad/rrhh/add", "contabilidad/rrhh/update", "contabilidad/nominas/add"];

      // let USUARIO3 = [
      //   "gerencia/asignacion_horario/add",
      //   "gerencia/asignacion_horario/listado",
      //   "gerencia/asignacion_horario/update",
      //   "banco/bancoSpirit/add",
      //   "banco/bancoSpirit/delete",
      //   "banco/bancoSpirit/update",
      //   "banco/listado/drop",
      //   "banco/listado/add",
      //   "banco/listado/delete",
      //   "banco/listado/update",
      //   "contabilidad/rrhh/add",
      //   "contabilidad/rrhh/update",
      //   "contabilidad/rrhh/delete",
      //   "contabilidad/monitoreo/add",
      //   "contabilidad/monitoreo/delete",
      //   "contabilidad/monitoreo/update",
      //   "contabilidad/nominas/add",
      //   "contabilidad/nominas/delete",
      //   "contabilidad/nominas/update",
      // ];

      setUserRutas(JSON.parse(rutasAJson(USUARIO1)));
    } else {
      setUserRutas([]);
    }
  }, [isLogin]);

  //RETURN
  return (
    <MainContext.Provider
      value={{
        isLogin,
        setIsLogin,
        suma,
        userRutas,
        //FUNCIONES
        sumar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContext;
