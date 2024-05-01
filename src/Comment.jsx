import { Box, Button, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { nanoid } from "nanoid";
import { useState } from "react";
import CommentItems from "./CommentItems";
import ModalComment from "./ModalComment";

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
  const { openModal, closeModal } = useGlobalContext();
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  // After the first submit, the value will remain the input state as initial state
  return (
    <Box
      width="100%"
      background={"rgb(34,35,152)"}
      sx={{
        minHeight: "100vh",
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
      >
        <Box display="flex" alignItems={"center"}>
          <CommentIcon
            sx={{
              mr: 3,
              color: "#ECE1FA",
              fontSize: { xs: 24, md: 34 },
            }}
          />
          <Typography
            variant="h1"
            fontFamily={"monospace"}
            fontSize={{ xs: 24, md: 34 }}
            color="#ECE1FA"
          >
            REACT POSTER
          </Typography>
        </Box>
        <Box
          display="flex"
          alignSelf="center"
          justifyContent={"end"}
          color=" #8C6CF7"
        >
          <Button
            padding={2}
            fontFamily={"revert"}
            fontStyle={"oblique"}
            sx={{ px: 2, bgcolor: "#2A2630", fontFamily: "cursive" }}
            onClick={openModal}
          >
            <ArticleSharpIcon sx={{ pr: 1, fontSize: { xs: 24, md: 34 } }} />
            New Post
          </Button>
        </Box>
      </Box>
      <Box>
        <TextlessUnderline />
      </Box>

      {comments.length === 0 || !openModal ? (
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{
            color: "white",
            pt: "2rem",
            fontFamily: "inherit",
            fontSize: { xs: 28, md: 37 },
          }}
        >
          There are no posts yet. <br />
          <Typography
            paddingTop={1}
            fontFamily={"inherit"}
            fontSize={{ xs: 20, md: 30 }}
          >
            Start adding some!
          </Typography>
        </Typography>
      ) : null}

      <ModalComment addComment={addComment} />
      <CommentItems comments={comments} />
    </Box>
  );
};
export default Comment;
