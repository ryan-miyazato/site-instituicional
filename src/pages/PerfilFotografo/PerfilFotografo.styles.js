import background from "assets/img/banner-perfil-fotografo.png";
import backgroundPerfil from "assets/img/foto-perfil-fotografo.png";
import { HEADER_HEIGHT } from "utils/constants";
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  banner: {
    height: `calc(30vh - ${HEADER_HEIGHT})`,
    maxWidth: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxSizing: "border-box",
  },
  cabecalho: {
    width: "150px",
    height: "150px",
    backgroundImage: `url(${backgroundPerfil})`,
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    position: "absolute",
    top: '-50%',
    alignSelf: "center",
  },
  textoCabecalho: {
    maxWidth: "100%",
    padding: "32px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  },
  section: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  sectionOne: {
    maxWidth: "48.5%",
    border: "1px solid black",
    justifyContent: "center",
    borderRadius: "4px",
    padding: "4px",
  },
  sectionTwo: {
    maxWidth: "48.5%",
    justifyContent: "center",
    borderRadius: "4px",
    border: "1px solid black",
    padding: "4px",
  },
  avaliacoes: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "36px",
    paddingBottom: '64px',
  },
}));
