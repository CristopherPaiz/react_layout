import PropTypes from "prop-types";

const BancoSpirit = ({ permisos }) => {
  return (
    <details>
      <summary className="tbs">BancoSpirit Permisos</summary>
      {permisos?.add && <button className="bta">add</button>}
      {permisos?.delete && <button className="btd">delete</button>}
      {permisos?.update && <button className="btu">update</button>}
    </details>
  );
};

export default BancoSpirit;

BancoSpirit.propTypes = {
  permisos: PropTypes.object.isRequired,
};
