import useStyles from "./DashFotografo.styles";
import {
  Drawer,
  Divider,
  Box,
  Stack,
  TextField,
  Typography,
  useTheme,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormGroup,
  Grid,
} from "@mui/material";
import Container from "atoms/Container";
import CaixaKpi from "atoms/CaixaKpi/CaixaKpi";
import CardChartPie from "atoms/CardChartPie/CardChartPie";
import CardBarChart from "atoms/CardBarChart/CardBarChart";
import CardBarLineChart from "atoms/CardBarLineChart/CardBarLineChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import CustomPopover from "molecules/CustomPopover";
import CustomPopoverDash from "atoms/CustomPopoverDash";
import { FOTOGRAFO } from "service/dashboard";
import axios from "axios";
import { Await } from "react-router-dom";
import { CLIENTE } from "service/user";
import { useUserContext } from "contexts";
import LogoPicme from "atoms/LogoPicme";

import BarChartIcon from "@mui/icons-material/BarChart";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import CardStackedBarChart from "atoms/CardStackedBarChart";

const DashFotografo = () => {
  const defaultValues = {
    metrica: "fotografo",
  };

  const [metrica, setMetrica] = useState(defaultValues.metrica);

  const [valorKpi1, setValorKpi1] = useState(0);

  const [valorKpi2, setValorKpi2] = useState(0);

  const [valorKpi3, setValorKpi3] = useState(0);

  const [valorKpi4, setValorKpi4] = useState(0);

  const [porcentagemKpi1, setPorcentagemKpi1] = useState(0);

  const [porcentagemKpi2, setPorcentagemKpi2] = useState(0);

  const [porcentagemKpi3, setPorcentagemKpi3] = useState(0);

  const [porcentagemKpi4, setPorcentagemKpi4] = useState(0);

  const [dataBar, setDataBar] = useState([{}]);

  const [dataBarFaixaEtaria, setDataBarFaixaEtaria] = useState([{}]);

  const [dataSessoesConvertidas, setDataSessoesConvertidas] = useState([{}]);

  const classes = useStyles();

  const { token, id, nome } = useUserContext();

  console.log(`Teste do ID: ${id}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        FOTOGRAFO.KPI_VALOR_MEDIO_COBRADO(token, id).then((response) => {
          let valor =
            response.data.media == undefined ? 0 : response.data.media;

          setValorKpi1(valor);
        });
        FOTOGRAFO.KPI_SESSOES_AGENDADAS_MES(token, id).then((response) => {
          let valor =
            response.data.total == undefined ? 0 : response.data.total;
          setValorKpi2(valor);
        });
        FOTOGRAFO.KPI_PROPOSTAS_RECEBIDAS_MES(token, id).then((response) => {
          let valor =
            response.data.mesAtualTotal == undefined
              ? 0
              : response.data.mesAtualTotal;
          setValorKpi3(valor);
        });
        FOTOGRAFO.KPI_VARIACAO_LUCRO_MENSAL(token, id).then((response) => {
          let valor =
            response.data.atual == undefined ? 0 : response.data.atual;
          setValorKpi4(valor);
        });
        FOTOGRAFO.VARIACAO_LUCRO_ULTIMOS_MESES(token, id).then((response) => {
          setDataBar(response.data);
        });
        FOTOGRAFO.CONTATOS_CONVERTIDOS_SESSOES(token, id).then((response) => {
          setDataSessoesConvertidas(response.data);
        });
        FOTOGRAFO.AVALIACAO_MEDIA_TEMA(token, id).then((response) => {
          setDataBarFaixaEtaria(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    if (token && id) {
      fetchData();
    }
  }, [token, id]);

  return (
    <Stack sx={{ transition: "2s all ease" }}>
      <Box>
        {/* <AppBar position="fixed"> */}
        <Drawer
          variant="permanent"
          open={true}
          PaperProps={{
            sx: {
              backgroundColor: "#1E1E1E !important",
              width: "7.5%",
              height: "100vh",
              display: "flex",
              flexDirection: "columns",
              justifyContent: "space-around",
              alignItems: "center",
            },
          }}
        >
          <Box>
            <LogoPicme dash={true} height={50} />
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              p={1}
              mb={5}
              sx={{ backgroundColor: "#ffffff", borderRadius: 5 }}
            >
              <BarChartIcon
                fontSize="large"
                style={{ color: "#1E1E1E", fontSize: 40 }}
              />
            </Box>
            <Box p={1} mb={5}>
              <ContentPasteGoIcon
                fontSize="large"
                style={{ color: "#ffffff", fontSize: 40 }}
              />
            </Box>
            <Box p={1} mb={5}>
              <SettingsIcon
                fontSize="large"
                style={{ color: "#ffffff", fontSize: 40 }}
              />
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <PersonIcon style={{ color: "#ffffff", fontSize: 40 }} />
              <Typography fontSize="14px" sx={{ color: "#ffffff" }}>
                {nome}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-around"
              >
                <LogoutIcon
                  style={{ color: "#ffffff", fontSize: 35, paddingTop: "10px" }}
                />
                <Typography fontSize="14px" sx={{ color: "#ffffff" }}>
                  Sair
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
        {/* </AppBar> */}
      </Box>

      <Box
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        // py={4}
        sx={{ width: "92.5%", backgroundColor: "#EFEFEF" }}
        ml="7.5%"
      >
        <Container
          py={3}
          flexDirection="row"
          justifyContent="center"
          paddingLeft="0"
          paddingRight="0"
          width="100%"
        >
          <Container
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
            paddingLeft="0"
            paddingRight="0"
            width="100%"
          >
            <Typography
              fontSize="16px"
              color="black"
              textAlign="center"
              flex={1}
            >
              Seja bem-vindo,{" "}
              <Box display="inline" fontWeight="bold">
                {nome}
              </Box>
              !
            </Typography>
          </Container>
        </Container>

        <>
          <Box>
            <Grid
              container
              columnSpacing={4}
              rowSpacing={4}
              sx={{
                width: "100%",
                margin: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={10}
                xs={10}
                sx={{
                  paddingLeft: "0 !important",
                  // paddingTop: "0 !important",
                }}
              >
                <Grid
                  container
                  rowSpacing={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Grid item md={12} sx={{ paddingLeft: "0 !important" }}>
                    <CaixaKpi
                      textoKpi="Valor médio cobrado: "
                      valorKpi={valorKpi1}
                      direita={true}
                    ></CaixaKpi>
                  </Grid>
                  <Grid item md={12} sx={{ paddingLeft: "0 !important" }}>
                    <CaixaKpi
                      textoKpi="Sessões agendadas no mês:"
                      valorKpi={valorKpi2}
                      direita={true}
                    ></CaixaKpi>
                  </Grid>
                  <Grid item md={12} sx={{ paddingLeft: "0 !important" }}>
                    <CaixaKpi
                      textoKpi="Propostas recebidas:"
                      valorKpi={valorKpi3}
                      porcentagem={porcentagemKpi3}
                      direita={true}
                    ></CaixaKpi>
                  </Grid>
                  <Grid item md={12} sx={{ paddingLeft: "0 !important" }}>
                    <CaixaKpi
                      textoKpi="Variação lucro/mês:"
                      valorKpi={valorKpi4}
                      porcentagem={porcentagemKpi4}
                      direita={true}
                    ></CaixaKpi>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xl={8}
                lg={8}
                md={8}
                sm={10}
                xs={10}
                sx={{
                  paddingLeft: "0 !important",
                  height: "100%",
                  // paddingTop: "0 !important",
                }}
              >
                <CardBarLineChart
                  tituloPieChart="Lucro nos últimos meses"
                  width="100%"
                  height={580}
                  data={dataBar}
                ></CardBarLineChart>
              </Grid>
            </Grid>

            <Grid
              container
              columnSpacing={4}
              rowSpacing={4}
              sx={{
                width: "100%",
                margin: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid
                item
                xl={5}
                lg={5}
                md={5}
                sm={10}
                xs={10}
                sx={{
                  paddingLeft: "0 !important",
                  // paddingTop: "0 !important",
                }}
              >
                <CardBarChart
                  tituloPieChart="Avaliação média por tema"
                  data={dataBarFaixaEtaria}
                  width="100%"
                />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={10}
                xs={10}
                sx={{
                  paddingLeft: "0 !important",
                  // paddingTop: "0 !important",
                }}
              >
                <CardStackedBarChart
                  tituloPieChart="Contatos convertidos em sessões"
                  width="100%"
                  data={dataSessoesConvertidas}
                />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={10}
                xs={10}
                sx={{
                  paddingLeft: "0 !important",
                  // paddingTop: "0 !important",
                }}
              ></Grid>
            </Grid>
          </Box>
        </>
      </Box>
    </Stack>
  );
};

export default DashFotografo;
