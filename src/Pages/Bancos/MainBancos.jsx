import PropTypes from "prop-types";
import BancoSpirit from "./Components/BancoSpirit";
import Listado from "./Components/Listado";

const MainBancos = ({ permisos }) => {
  return (
    <>
      <h1 className="th1">MainBancos</h1>
      {permisos?.bancoSpirit && <BancoSpirit permisos={permisos.bancoSpirit} />}
      {permisos?.listado && <Listado permisos={permisos.listado} />}
    </>
  );
};

export default MainBancos;

MainBancos.propTypes = {
  permisos: PropTypes.object.isRequired,
};
