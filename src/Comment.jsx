import { Box, Button, Container, Typography, colors } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import styled from "styled-components";

// background: rgb(34,35,152);
// background: linear-gradient(155deg, rgba(34,35,152,1) 45%, rgba(7,2,55,1) 50%);

const TextlessUnderline = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 2px;
  background-color: white;
  margin-top: 10px;
`;
const Comment = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      background={"rgb(34,35,152)"}
      sx={{
        backgroundImage:
          "  linear-gradient(155deg, rgba(34,35,152,1) 45%, rgba(7,2,55,1) 50%);",
      }}
    >
      <Box
        width="75%"
        display="flex"
        paddingTop={10}
        paddingBottom={1}
        margin="auto"
        alignContent={"space-between"}
        justifyContent={"space-between"}
        sx={{ textDecoration: "un" }}
      >
        <Box display="flex" alignItems={"center"}>
          <CommentIcon
            sx={{
              mr: 3,
              // pt: 1,
              color: "#ECE1FA",
              fontSize: 35,
            }}
          />
          <Typography
            variant="h3"
            fontFamily={"fantasy"}
            //   fontSize={35}
            color="#ECE1FA"
          >
            REACT POSTER
          </Typography>
        </Box>
        <Box
          display="flex"
          alignSelf="center"
          align
          justifyContent={"end"}
          color=" #8C6CF7"
        >
          <Button
            padding={2}
            fontFamily={"revert"}
            fontStyle={"oblique"}
            sx={{ px: 2, bgcolor: "#2A2630", fontFamily: "cursive" }}
          >
            <ArticleSharpIcon sx={{ pr: 1 }} />
            New Post
          </Button>
        </Box>
      </Box>
      <Box>
        <TextlessUnderline />
      </Box>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{
          color: "white",
          pt: "2rem",
        }}
      >
        There are no posts yet. <br />{" "}
        <Typography paddingTop={1}>Start adding some! </Typography>
      </Typography>
    </Box>
  );
};
export default Comment;