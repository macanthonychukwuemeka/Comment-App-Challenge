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
import { nanoid } from "nanoid";

const TextForm = ({ addComment }) => {
  const { closeModal } = useGlobalContext();

  const [value, setValue] = useState({ name: "", comment: "" });

  const handleChange = (e) => {
    setValue((prevstat) => ({ ...prevstat, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(value);
    console.log(value);
    closeModal();
  };
  return (
    <>
      <form onSubmit={handleSubmit} value={value}>
        <Box sx={{ py: 5, px: 2 }}>
          <Typography
            fontfamily="monospace"
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
            // onChange={(e) => setValue(e.target.value)}
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
              name="comment"
              value={value.comment}
              label="Text"
              multiline
              rows={1}
              variant="outlined"
              fontfamily="monospace"
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

export default TextForm;
