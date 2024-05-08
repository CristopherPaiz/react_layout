import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    // ========= CASO 1 =========
    //<Router>
    //  <Routes>
    //   <Route path="/" element={
    //      <UserProvider>
    //        <Homepage />
    //      </UserProvider>
    //    } />
    //    <Route path="/login" element={
    //      <SettingsProvider>
    //        <Login />
    //      </SettingsProvider>
    //    } />
    //    <Route path="*" element={
    //      <ThemeProvider>
    //        <NotFound />
    //      </ThemeProvider>
    //    } />
    //  </Routes>
    //</Router>

    // ========= CASO 2 =========
    //  <Route path="/" element={
    //   <UserProvider>
    //     <Routes>
    //       <Route index element={<Homepage />} />
    //       <Route path="profile" element={<Profile />} />
    //       {/* ... otras rutas que también necesitan UserContext ... */}
    //     </Routes>
    //   </UserProvider>
    // } />
  );
};

export default App;
