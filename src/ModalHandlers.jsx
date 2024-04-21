// import { useState } from "react";
// export const ModalHandlers = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return [open, handleOpen, handleClose];
// };
// export default ModalHandlers;

export const handleOpenModal = (setOpen) => {
  setOpen(true);
};

export const handleCloseModal = (setOpen) => {
  setOpen(false);
};
