import React, { useState } from "react";
import Header from "../components/header";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import PostCard from "../components/postCard/postCard";

const Community = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header />
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth="true">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <DialogTitle>Описание идеи</DialogTitle>
        </Box>
        <DialogContent>
          <Container>
            <TextField
              id="outlined-multiline-static"
              label="Тема"
              multiline
              maxRows={3}
              sx={{ width: "100%", marginBottom: "10px" }}
            />

            <TextField
              id="outlined-multiline-static"
              label="Описание"
              multiline
              rows={4}
              sx={{ width: "100%", marginBottom: "10px" }}
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ color: theme.palette.primary.black }}
          >
            Предложить
          </Button>
        </DialogActions>
      </Dialog>

      <Container
        sx={{
          marginTop: "30px",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{ marginBottom: "10px" }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Предложить что-либо
        </Button>
      </Container>
      <Container
        sx={{
          marginTop: "30px",
          maxWidth: "1200px",
        }}
      >
        <PostCard />
      </Container>
    </div>
  );
};

export default Community;
