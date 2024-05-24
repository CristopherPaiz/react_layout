import PropTypes from "prop-types";

const AsignacionHorarios = ({ permisos }) => {
  return (
    <details>
      <summary className="bg-red-200 py-2 px-6 rounded-lg cursor-pointer my-2">AsignacionHorarios Permisos</summary>
      {permisos?.add && <button className="bg-green-200 p-3 mr-2">add</button>}
      {permisos?.listado && <button className="bg-red-200 p-3 mr-2">delete</button>}
      {permisos?.update && <button className="bg-purple-200 p-3 mr-2">update</button>}
    </details>
  );
};

export default AsignacionHorarios;

AsignacionHorarios.propTypes = {
  permisos: PropTypes.object.isRequired,
};
