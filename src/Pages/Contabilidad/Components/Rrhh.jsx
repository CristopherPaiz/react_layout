import PropTypes from "prop-types";

const Rrhh = ({ permisos }) => {
  return (
    <details>
      <summary className="tbm">RRHH Permisos</summary>
      {permisos?.add && <button className="bta">add</button>}
      {permisos?.delete && <button className="btd">delete</button>}
      {permisos?.update && <button className="btu">update</button>}
    </details>
  );
};

export default Rrhh;

Rrhh.propTypes = {
  permisos: PropTypes.object.isRequired,
};
