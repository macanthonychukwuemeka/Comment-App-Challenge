import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CommentItems = ({ comments }) => {
  return (
    <Box width={"100%"} minHeight={"70"} padding={2}>
      <Grid
        container
        spacing={-4}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {comments.map((comment) => (
          <Grid
            item
            spacing={-5}
            xs={12}
            sm={5}
            // md={5}
            lg={3}
            margin={2}
            border={"Highlight"}
            key={comment.id}
            sx={{
              p: 2,
              background: "#c7c6d1",
              minWidth: "10rem",
              minHeight: "8rem",
              borderRadius: 5,
            }}
          >
            <Typography
              variant="h1"
              color="#2f1770"
              fontSize={{ xs: 13, sm: 15, md: 16, lg: 18, xl: 19 }}
              sx={{
                fontFamily: "initial",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {comment.comment}
            </Typography>
            <Typography
              sx={{
                fontFamily: "initial",
                textAlign: "start",
                textTransform: "capitalize",
              }}
              fontSize={{ xs: 12, sm: 14, md: 15, lg: 16, xl: 18 }}
            >
              {comment.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommentItems;
