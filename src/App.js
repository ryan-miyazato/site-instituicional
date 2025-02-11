import Theme from "templates/Theme/Theme";
import VLibras from "@djpfs/react-vlibras";
import { UserProvider } from "contexts";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Pedido from "pages/Pedido";
import Home from "pages/Home";
import ChooseProfileType from "pages/ChooseProfileType";
import Register from "pages/Register";
import Login from "pages/Login";
import DashAdmin from "pages/DashAdmin/DashAdmin";
import DashFotografo from "pages/DashFotografo";
import Feed from "pages/Feed";
import Preferences from "pages/Preferences";
import Album from "pages/Album";
import PerfilFotografo from "pages/PerfilFotografo/PerfilFotografo";
import InstaRedirect from "pages/InstaRedirect";


const DefaultProviders = ({ children }) => (
  <UserProvider>{children}</UserProvider>
);

function App() {
  return (
    <Theme>
      <VLibras />
      <DefaultProviders>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pedido" element={<Pedido />} />
            <Route exact path="/persona" element={<ChooseProfileType />} />
            <Route exact path="/cadastro/:profileType" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/explorar" element={<Feed />} />
            <Route exact path="/dash-admin" element={<DashAdmin />} />
            <Route exact path="/dash-fotografo" element={<DashFotografo />} />
            <Route exact path="/preferencias" element={<Preferences />} />
            <Route exact path="/album" element={<Album />}></Route>
            <Route
              exact
              path="/insta-redirect/"
              element={<InstaRedirect />}
            ></Route>
            <Route
              exact
              path="/perfil-fotografo"
              element={<PerfilFotografo />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </DefaultProviders>
    </Theme>
  );
}

export default App;
