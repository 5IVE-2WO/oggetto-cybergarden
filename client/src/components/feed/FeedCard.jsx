import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import EventIcon from "@mui/icons-material/Event";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SendIcon from "@mui/icons-material/Send";
import { DeleteOutline } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteDialog from "../deleteDialog";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FeedCard() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [activateNotification, setActivateNotification] = useState(false);
  const [deleteToogle, setDeleteToogle] = useState(false);

  const deleteHandel = () => {
    setDeleteToogle((prev) => !prev);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            ЧМ
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Черненко Максим Игоревич"
        subheader="Врач-психолог"
      />
      <IconButton aria-label="remove" onClick={deleteHandel}>
        <DeleteOutline />
      </IconButton>
      <DeleteDialog
        text={"Вы точно хотите удалить это мероприятие?"}
        toogleFunction={deleteHandel}
        toogleConst={deleteToogle}
      />
      <CardContent>
        <Box sx={{ marginBottom: "15px" }}>
          <Typography color="text.main">
            Курс "Повышение личной эффективности"
          </Typography>
          <Typography fontFamily={"Georgia"} color="text.secondary">
            В ходе курса вы станете онжумания - 1000, прэсс - 500, бегит - 10000
            метров
          </Typography>
        </Box>
        <Typography variant="body2" color="text.main">
          <IconButton aria-label="event">
            <EventIcon />
          </IconButton>
          25 декабря 2023 года 20:00
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Notification"
          onClick={() => setActivateNotification(!activateNotification)}
        >
          <NotificationsActiveIcon
            sx={
              activateNotification
                ? { color: theme.palette.primary.dark }
                : { color: "grey" }
            }
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <SendIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>123</CardContent>
      </Collapse>
    </Card>
  );
}
