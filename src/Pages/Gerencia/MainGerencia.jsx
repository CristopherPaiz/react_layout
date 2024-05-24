import PropTypes from "prop-types";
import AsignacionHorarios from "./Components/AsignacionHorarios";

const MainGerencia = ({ permisos }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">MainGerencia</h1>
      {permisos?.asignacion_horario && <AsignacionHorarios permisos={permisos.asignacion_horario} />}
    </>
  );
};

export default MainGerencia;

MainGerencia.propTypes = {
  permisos: PropTypes.object.isRequired,
};
