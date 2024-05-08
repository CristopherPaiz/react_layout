import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [edad, setEdad] = useState(0);
  const [suma, setSuma] = useState(0);

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

  return (
    <MainContext.Provider
      value={{
        isLogin,
        setIsLogin,
        edad,
        setEdad,
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
