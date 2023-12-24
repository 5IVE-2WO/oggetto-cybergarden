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
import { DateTimeField } from "@mui/x-date-pickers";
import "dayjs/locale/de";
import { useTheme } from "@mui/system";
import axios from "../utils/axios";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const Feed = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const authState = useSelector((state) => state.auth);

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setContent("");
    setSpeaker("");
  };

  // Сохранение и управление состояниями input
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [speaker, setSpeaker] = React.useState(null);
  const [timestamp, setTimestamp] = React.useState(dayjs("2024-01-11T10:30"));

  const [titleErrorStatus, setTitleErrorStatus] = React.useState(false);

  // Список спикеров и его получение при загрузке страницы
  const [speakers, setSpeakers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`/api/speaker`).then(({ data }) => {
      const newSpeakers = data.map((speaker) => ({
        label: speaker.name,
        id: speaker.id,
      }));
      setSpeakers((prev) => [...prev, ...newSpeakers]);
    });
  }, []);

  const createEvent = () => {
    if (title === "" || content === "" || speaker.id === null) return false;
    axios.post(`/api/event`, {
      title,
      content,
      timestamp: timestamp.$d.toLocaleString(),
      speaker_id: speaker.id,
    });
  };

  return (
    <div>
      <Header />
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth="true">
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Создание события
        </DialogTitle>
        <DialogContent
          sx={{
            paddingBottom: "0",
          }}
        >
          <Container>
            <TextField
              color="secondary"
              margin="dense"
              fullWidth
              required
              label="Заголовок"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              sx={{
                borderColor: theme.palette.primary.black,
              }}
            />

            <TextField
              margin="dense"
              color="secondary"
              fullWidth
              required
              label="Описание"
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
              multiline
              rows={4}
            />

            <Autocomplete
              fullWidth
              required
              value={speaker}
              onChange={(event, newValue) => {
                setSpeaker(newValue);
              }}
              options={speakers}
              autoHighlight
              renderInput={(params) => (
                <TextField
                  margin="dense"
                  required
                  color="secondary"
                  label="Ведущий спикер"
                  {...params}
                />
              )}
            />

            <DateTimeField
              margin="dense"
              color="secondary"
              fullWidth
              required
              label="Дата проведения"
              value={timestamp}
              onChange={(newValue) => setTimestamp(newValue)}
            />
          </Container>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "16px",
            paddingTop: "16px",
          }}
        >
          <Button
            disabled={title === "" || content === "" || !speaker}
            variant="contained"
            onClick={createEvent}
            sx={{
              color: theme.palette.primary.black,
              borderColor: theme.palette.primary.main,
            }}
          >
            Создать событие
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              color: theme.palette.primary.black,
              borderColor: theme.palette.primary.main,
            }}
          >
            Отменить
          </Button>
        </DialogActions>
      </Dialog>

      <Container
        sx={{
          marginTop: "30px",
          maxWidth: "1200px",
        }}
      >
        <Button
          style={{ marginBottom: "10px" }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Создать новое событие
        </Button>
        <FeedCard />
      </Container>
    </div>
  );
};

export default Feed;
