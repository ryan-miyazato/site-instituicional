import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => (
  {
    customBtn: {
      '& .MuiButtonBase-root': {
        textTransform: 'none !important', 
        padding: theme.spacing(2),
        borderRadius: theme.spacing(0.5),
      },
      fontFamily: 'Inter, sans-serif',
      fontSize: theme.spacing(2),
      textTransform: 'none !important',
      padding: theme.spacing(2), 
      width: 'fit-content', 
      height: 32,
      whiteSpace: 'nowrap',
      borderRadius: 0.5,
    },
  }
))