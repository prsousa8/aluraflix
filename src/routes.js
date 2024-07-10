import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Rodape from "./components/Rodape";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/novo-video" element={<NovoVideo />}/>
          <Route path="/*" element={<h1>Página não encontrada</h1>}/>
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
