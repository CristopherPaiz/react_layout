import { APELLIDO, NOMBRE } from "../Helpers/Helper";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../Context/MainContext";
import MainLayout from "../Layouts/MainLayout";
import ListadoRutas from "./ListadoRutas";

const Profile = () => {
  const { sumar, suma, isLogin, userRutas } = useContext(MainContext);

  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  //create useNavigate
  const navigate = useNavigate();

  //verificar inicio de sesion
  if (isLogin) {
    return (
      <MainLayout>
        <div className="pce">
          Este es el perfil de {NOMBRE} {APELLIDO}
          <hr />
          <input className="border-2" type="number" placeholder="Num 1" onChange={(e) => setnum1(e.target.value)} />
          <input className="border-2" type="number" placeholder="Num 2" onChange={(e) => setnum2(e.target.value)} />
          <button className="bgr" onClick={() => sumar(num1, num2)}>
            Sumar
          </button>
          {(suma !== 0 || suma !== null) && <p>Resultado: {suma}</p>}
        </div>

        {/* AQUI ENTRA LA MAGIA DE LAS RUTAS */}
        {userRutas ? <ListadoRutas rutas={userRutas} /> : <h1>No hay permisos</h1>}
      </MainLayout>
    );
  } else {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }
};

export default Profile;
