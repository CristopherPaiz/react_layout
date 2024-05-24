import PropTypes from "prop-types";

const Listado = ({ permisos }) => {
  return (
    <details>
      <summary className="tbs">Listado Permisos</summary>
      {permisos?.drop && <button className="btdr">drop</button>}
      {permisos?.add && <button className="bta">add</button>}
      {permisos?.delete && <button className="btd">delete</button>}
      {permisos?.update && <button className="btu">update</button>}
    </details>
  );
};

export default Listado;

Listado.propTypes = {
  permisos: PropTypes.object.isRequired,
};
