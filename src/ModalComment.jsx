import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import CommentForm from "./CommentForm";

const ModalComment = ({ addComment }) => {
  const { open, closeModal } = useGlobalContext();

  return (
    <Box>
      <Modal
        // hideBackdrop
        // width="395rem"
        sx={{
          width: "23rem",
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",
          m: 0,
          margin: "auto",
          mt: 18,
          background: "rgb(34, 35, 152)",
          borderRadius: 5,
        }}
        open={open}
        onClose={closeModal}
      >
        <CommentForm addComment={addComment} />
      </Modal>
    </Box>
  );
};
export default ModalComment;
