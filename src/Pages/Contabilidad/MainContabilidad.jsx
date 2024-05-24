import PropTypes from "prop-types";
import Rrhh from "./Components/Rrhh";
import Monitoreo from "./Components/Monitoreo";
import Nominas from "./Components/Nominas";

const MainContabilidad = ({ permisos }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">MainContabilidad</h1>
      {permisos?.rrhh && <Rrhh permisos={permisos.rrhh} />}
      {permisos?.monitoreo && <Monitoreo permisos={permisos.monitoreo} />}
      {permisos?.nominas && <Nominas permisos={permisos.nominas} />}
    </>
  );
};

export default MainContabilidad;

MainContabilidad.propTypes = {
  permisos: PropTypes.object.isRequired,
};
