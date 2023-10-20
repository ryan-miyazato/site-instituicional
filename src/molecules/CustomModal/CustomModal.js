import { Modal } from "@mui/material"
import useStyles from "./CustomModal.styles"

const CustomModal = ({ open, setOpen, children, ...props }) => {
  const classes = useStyles()

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal} {...props}>
      {children}
    </Modal>
  )
}

export default CustomModal