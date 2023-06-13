import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";
import { Header } from "./components/Header";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/conta/:id"
        element={
          isLoggedIn ? (
            <>
              <Header />
              <Conta />
            </>
          ) : (
            <Home />
          )
        }
      />
      <Route
        path="/infoconta"
        element={
          isLoggedIn ? (
            <>
              <Header />
              <ContaInfo />
            </>
          ) : (
            <Home />
          )
        }
      />
    </Routes>
  );
};

export default MainRoutes;
