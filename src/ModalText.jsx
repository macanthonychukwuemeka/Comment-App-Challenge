import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import TextForm from "./TextForm";

const ModalText = () => {
  const [open, setOpen] = useState(false);
  const { isModalOpen, setisModalOpen } = useGlobalContext();
  console.log(open);
  return (
    <Box>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open modal
      </Button>
      <Modal
        // hideBackdrop

        sx={{
          width: 395,
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",
          m: 0,
          margin: "auto",
          background: "rgb(34, 35, 152)",
          borderRadius: 5,
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <TextForm />
      </Modal>
    </Box>
  );
};
export default ModalText;
