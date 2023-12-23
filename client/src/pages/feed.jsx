import React, { useState } from "react";
import Header from "../components/header";
import FeedCard from "../components/feed/FeedCard";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Autocomplete, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import {useSelector} from "react-redux";

const Feed = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const authState = useSelector(state => state.auth)
    console.log(authState)
  const lektors = [
    { label: "Maksim" },
    { label: "Nikita" },
    { label: "Egor" },
    { label: "Maksim" },
  ];

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
          <DialogTitle>Создание события</DialogTitle>
        </Box>
        <DialogContent>
          <Container>
            <TextField
              id="outlined-multiline-static"
              label="Название"
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

            <Autocomplete
              id="country-select-demo"
              sx={{ width: "100%", marginBottom: "10px" }}
              options={lektors}
              autoHighlight
              renderInput={(params) => (
                <TextField label="Выбор лектора" {...params} />
              )}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ width: "100%" }} />
            </LocalizationProvider>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ color: theme.palette.primary.black }}
          >
            Создать
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
          Создать новое событие
        </Button>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label={'"month" and "year"'} views={["month", "year"]} />
        </LocalizationProvider>
      </Container>
      <Container
        sx={{
          marginTop: "30px",
          maxWidth: "1200px",
        }}
      >
        <FeedCard />
      </Container>
    </div>
  );
};

export default Feed;
