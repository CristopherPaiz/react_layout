import MainLayout from "../Layouts/MainLayout";

const Homepage = () => {
  //podría ser un fetch de datos usando async await, promesas o axios y también usando useEffect para la carga de datos
  const cards = [
    { nombre: "Card 1", descripcion: "Descripción 1" },
    { nombre: "Card 2", descripcion: "Descripción 2" },
    { nombre: "Card 3", descripcion: "Descripción 3" },
    { nombre: "Card 4", descripcion: "Descripción 4" },
    { nombre: "Card 5", descripcion: "Descripción 5" },
    { nombre: "Card 6", descripcion: "Descripción 6" },
    { nombre: "Card 7", descripcion: "Descripción 7" },
    { nombre: "Card 8", descripcion: "Descripción 8" },
    { nombre: "Card 9", descripcion: "Descripción 9" },
    { nombre: "Card 10", descripcion: "Descripción 10" },
    { nombre: "Card 11", descripcion: "Descripción 11" },
    { nombre: "Card 12", descripcion: "Descripción 12" },
  ];

  return (
    <MainLayout>
      <div className="h-full flex-1 justify-center flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">Página de Inicio</h1>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-64 h-32 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-gray-900">{card.nombre}</h2>
              <p className="text-gray-600">{card.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
