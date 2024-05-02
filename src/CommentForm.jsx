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
      <form
        onSubmit={handleSubmit}
        value={value}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{ py: 5, px: 2, m: 0, margin: "auto" }}

          // display={"flex"}
          // flexDirection={"column"}
          // justifyContent="center"
          // alignContent={"center"}
          // alignItems="center"
        >
          <Typography
            fontFamily="monospace"
            fontSize={20}
            textAlign={"left"}
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
            // width={"5rem"}
            variant="outlined"
            inputProps={{ style: { textTransform: "capitalize" } }}
            sx={{
              // width: " 45ch",
              width: { xs: "120%", sm: "120%", md: "120%" },
              // width:{xs:}
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
                // width: " 45ch",
                width: { xs: "120%", sm: "120%", md: "120%" },
                // display: "flex",
                // alignSelf: "right",
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
            alignItems={"right"}
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
