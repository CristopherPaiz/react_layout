import PropTypes from "prop-types";

const Listado = ({ permisos }) => {
  return (
    <details>
      <summary className="bg-blue-200 py-2 px-6 rounded-lg cursor-pointer my-2">Listado Permisos</summary>
      {permisos?.drop && <button className="bg-yellow-200 p-3 mr-2">drop</button>}
      {permisos?.add && <button className="bg-green-200 p-3 mr-2">add</button>}
      {permisos?.delete && <button className="bg-red-200 p-3 mr-2">delete</button>}
      {permisos?.update && <button className="bg-purple-200 p-3 mr-2">update</button>}
    </details>
  );
};

export default Listado;

Listado.propTypes = {
  permisos: PropTypes.object.isRequired,
};