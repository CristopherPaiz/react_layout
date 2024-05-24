import PropTypes from "prop-types";

const Rrhh = ({ permisos }) => {
  return (
    <details>
      <summary className="bg-green-200 py-2 px-6 rounded-lg cursor-pointer my-2">RRHH Permisos</summary>
      {permisos?.add && <button className="bg-green-200 p-3 mr-2">add</button>}
      {permisos?.delete && <button className="bg-red-200 p-3 mr-2">delete</button>}
      {permisos?.update && <button className="bg-purple-200 p-3 mr-2">update</button>}
    </details>
  );
};

export default Rrhh;

Rrhh.propTypes = {
  permisos: PropTypes.object.isRequired,
};
