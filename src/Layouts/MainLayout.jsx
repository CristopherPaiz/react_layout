import PropTypes from "prop-types";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen overflow-auto">
      <Navbar />
      <div className="mt-[60px]"></div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
