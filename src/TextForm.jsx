import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TextForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
            label="Text"
            type="text"
            onChange={(e) => setValue(e.target.value)}
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
          {/* <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>{" "} */}
          <Box
            display="flex"
            justifyContent={"end"}
            paddingRight={1}
            paddingTop={2}
          >
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                setOpen(false);
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default TextForm;