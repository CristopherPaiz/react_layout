import PropTypes from "prop-types";

const AsignacionHorarios = ({ permisos }) => {
  return (
    <details>
      <summary className="tap">AsignacionHorarios Permisos</summary>
      {permisos?.add && <button className="bta">add</button>}
      {permisos?.listado && <button className="btd">delete</button>}
      {permisos?.update && <button className="btu">update</button>}
    </details>
  );
};

export default AsignacionHorarios;

AsignacionHorarios.propTypes = {
  permisos: PropTypes.object.isRequired,
};
