import useStyles from "./Contrato.styles";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Box,
  Stack,
  TextField,
  Typography,
  LinearProgress,
  Select,
  MenuItem,
  Checkbox,
  useTheme,
} from "@mui/material";
import CustomButton from "atoms/CustomButton";
import CustomModal from "molecules/CustomModal";

export default function BasicModal({ open, setOpen }) {
  const classes = useStyles()
  const theme = useTheme()

  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [contractStatus, setContractStatus] = useState("Evento");
  const [selectedOption, setSelectedOption] = useState("email");

  const [selectedTema, setSelectedTema] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [horarioEvento, setHorarioEvento] = useState("");

  const [cep, setCep] = useState("");
  const [selectedEstado, setSelectedEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const handleOpen = () => {
    setStep(0);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleStatusClick = (status, value) => {
    setContractStatus(status);
    setProgressValue(value);
  };

  const handleNext = () => {
    if (step === 0) {
      handleStatusClick("Mensagem", 50.0);
      setStep(1);
    } else if (step === 1) {
      handleStatusClick("Confirmar", 100.0);
      setStep(2);
    } else if (step === 2) {
      handleClose();
    }
  };

  const handlePrevious = () => {
    if (step === 1) {
      handleStatusClick("Evento", 0.0);
      setStep(0);
    } else if (step === 2) {
      handleStatusClick("Mensagem", 50.0);
      setStep(1);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <CustomModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <Stack minHeight="100%" minWidth="100%">
          <Stack
            position="relative"
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Button color="secondary" className={classes.closeIcon}><CloseIcon /></Button>
            <Stack py={1}>
              <Typography variant="subtitle-small-semibold">Header</Typography>
            </Stack>
          </Stack>
          <Stack>

          </Stack>
          <CustomButton
            sx={{
              position: 'absolute',
              width: 'fit-content',
              bottom: theme.spacing(2),
              left: theme.spacing(2),
            }}
            color="secondary"
            variant="outlined"
          >
            Voltar
          </CustomButton>
          <CustomButton
            sx={{
              position: 'absolute',
              width: 'fit-content',
              bottom: theme.spacing(2),
              right: theme.spacing(2),
            }}
            color="secondary"
            variant="contained"
          >
            Avançar
          </CustomButton>
        </Stack>
      </Box>
    </CustomModal>
  );
}
