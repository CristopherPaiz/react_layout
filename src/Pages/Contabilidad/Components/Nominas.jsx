import PropTypes from "prop-types";

const Nominas = ({ permisos }) => {
  return (
    <details>
      <summary className="tbm">Nominas Permisos</summary>
      {permisos?.add && <button className="bta">add</button>}
      {permisos?.delete && <button className="btd">delete</button>}
      {permisos?.update && <button className="btu">update</button>}
    </details>
  );
};

export default Nominas;

Nominas.propTypes = {
  permisos: PropTypes.object.isRequired,
};
