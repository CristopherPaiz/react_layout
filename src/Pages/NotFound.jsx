import MainLayout from "../Layouts/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center w-full h-full flex-1">
        <h1 className="text-2xl font-bold p-5 text-wrap">404 | Página no encontrada</h1>
      </div>
    </MainLayout>
  );
};

export default NotFound;
