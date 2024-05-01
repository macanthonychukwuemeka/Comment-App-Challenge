import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { nanoid } from "nanoid";

const CommentForm = ({ addComment }) => {
  const { closeModal, openModal } = useGlobalContext();

  const [value, setValue] = useState({ name: "", comment: "" });

  const handleChange = (e) => {
    setValue((prevstat) => ({ ...prevstat, [e.target.name]: e.target.value }));
    //This will pull the values stored in the name data type
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, comment } = value;
    if (!name || (!comment && name.length === 0) || comment.length === 0) {
      alert("Incomplete values, not executing submit logic");
      openModal();
    } else {
      addComment({
        id: Date.now(),
        name: value.name,
        comment: value.comment,
      });
      closeModal();
      setValue({ name: "", comment: "" });

      return;
    }
    // Reset the form fields
  };
  return (
    <>
      <form onSubmit={handleSubmit} value={value}>
        <Box sx={{ py: 5, px: 2 }}>
          <Typography
            fontFamily="monospace"
            fontSize={20}
            color={"white"}
            sx={{ pb: 2 }}
          >
            Text
          </Typography>
          <TextField
            onChange={handleChange}
            value={value.name}
            label="Text"
            type="text"
            name="name"
            multiline
            rows={4}
            variant="outlined"
            inputProps={{ style: { textTransform: "capitalize" } }}
            sx={{
              width: " 45ch",
              borderRadius: 2,
              color: "yellow",
              bgcolor: "white",
              textTransform: "capitalize",
            }}
          />
          <br />

          <Typography fontSize={16} paddingTop={2} color={"white"}>
            Your Name
            <TextField
              onChange={handleChange}
              type="text"
              name="comment"
              value={value.comment}
              label="your Name"
              multiline
              rows={1}
              variant="outlined"
              fontFamily="monospace"
              inputProps={{ style: { textTransform: "capitalize" } }}
              sx={{
                width: " 40ch",
                borderRadius: 2,
                color: "yellow",
                bgcolor: "white",
                textTransform: "capitalize",
              }}
            />
          </Typography>

          <Box
            display="flex"
            justifyContent={"end"}
            paddingRight={1}
            paddingTop={2}
          >
            <Button variant="contained" sx={{ mr: 2 }} onClick={closeModal}>
              cancel
            </Button>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CommentForm;
