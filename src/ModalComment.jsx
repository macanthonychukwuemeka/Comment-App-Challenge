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
        onClose={closeModal}
      >
        <CommentForm addComment={addComment} />
      </Modal>
    </Box>
  );
};
export default ModalComment;
