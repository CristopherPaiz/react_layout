import PropTypes from "prop-types";

const Monitoreo = ({ permisos }) => {
  return (
    <details>
      <summary className="tbm">Monitoreo Permisos</summary>
      {permisos?.add && <button className="bta">add</button>}
      {permisos?.delete && <button className="btd">delete</button>}
      {permisos?.update && <button className="btu">update</button>}
    </details>
  );
};

export default Monitoreo;

Monitoreo.propTypes = {
  permisos: PropTypes.object.isRequired,
};
