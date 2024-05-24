import PropTypes from "prop-types";
import MainBancos from "./Bancos/MainBancos";
import Gerencia from "./Gerencia/MainGerencia";
import MainContabilidad from "./Contabilidad/MainContabilidad";

const ListadoRutas = ({ rutas }) => {
  return (
    <div className="flex flex-row gap-2 p-28 text-xl">
      <div className="flex flex-col gap-2 w-1/3">{rutas?.banco && <MainBancos permisos={rutas.banco} />}</div>
      <div className="flex flex-col gap-2 w-1/3">
        {rutas?.contabilidad && <MainContabilidad permisos={rutas.contabilidad} />}
      </div>
      <div className="flex flex-col gap-2 w-1/3">{rutas?.gerencia && <Gerencia permisos={rutas.gerencia} />}</div>
    </div>
  );
};

export default ListadoRutas;

//proptypes

ListadoRutas.propTypes = {
  rutas: PropTypes.object.isRequired,
};
