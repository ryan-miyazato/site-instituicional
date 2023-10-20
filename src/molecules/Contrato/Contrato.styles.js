import { makeStyles } from '@mui/styles'


export default makeStyles((theme) => ({

  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '50dvw',
    minWidth: '50dvw',
    minHeight: '75dvh',
    backgroundColor: theme.palette.white.main,
    border: '0px solid #000',
    borderRadius: theme.shape.borderRadius * 4,
    boxShadow: 24,
    padding: theme.spacing(2),
  },

  closeIcon: {
    position: 'absolute !important',
    left: 0,
    top: 0,
    textAlign: 'center',
    border: '1px solid #000 !important',
    width: 'fit-content !important',
    minWidth: '0 !important',
    borderRadius: theme.shape.borderRadius * 2,
    fontSize: theme.spacing(3),
    color: theme.palette.stroke.main,
  },

  customModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh", // Ajuste a altura conforme necessário
  },

  buttonLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  buttonRight: {
    position: 'absolute',
    width: 'fit-content',
    bottom: 0,
    right: 0,
  },


  textContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'right',
    fontSize: '14px'
  },

  font: {
    color: theme.palette.white.main,
    fontWeight: 700,
    // fontSize: '25px',

  }



}

))