import { APELLIDO, NOMBRE } from "../Helpers/Helper";
import MainContext from "../Context/MainContext";
import { useContext, useState } from "react";
import MainLayout from "../Layouts/MainLayout";

const Profile = () => {
  const { sumar, suma } = useContext(MainContext);

  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center">
        Este es el perfil de {NOMBRE} {APELLIDO}
        <hr />
        <input
          className="border-2"
          type="number"
          id="num1"
          placeholder="Num 1"
          onChange={(e) => setnum1(e.target.value)}
        />
        <input
          className="border-2"
          type="number"
          id="num2"
          placeholder="Num 2"
          onChange={(e) => setnum2(e.target.value)}
        />
        <button className="bg-green-400 py-2 px-5" onClick={() => sumar(num1, num2)}>
          Sumar
        </button>
        {(suma !== 0 || suma !== null) && <p>Resultado: {suma}</p>}
      </div>
    </MainLayout>
  );
};

export default Profile;
