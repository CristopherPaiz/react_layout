import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //VARIBALES
  const [isLogin, setIsLogin] = useState(false);
  const [suma, setSuma] = useState(0);

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

  //RETURN
  return (
    <MainContext.Provider
      value={{
        isLogin,
        setIsLogin,
        suma,
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
