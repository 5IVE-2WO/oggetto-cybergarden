import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { DeleteOutline } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { Container } from "@mui/system";

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

const PostCard = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [activateFavourite, setActivateFavourite] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], padding: "0" }}
              aria-label="recipe"
            >
              ЧМ
            </Avatar>
          }
          title="Черненко Максим Игоревич"
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="editing">
            <CreateIcon />
          </IconButton>
          <IconButton aria-label="remove">
            <DeleteOutline />
          </IconButton>
        </Box>
      </Container>
      <CardContent>
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            color="black"
            fontSize={24}
            fontWeight={700}
            sx={{ margin: "0px 0px 12px 0px" }}
          >
            Пригласить нового человека
          </Typography>
          <Typography fontFamily={theme.typography.addition} color="black">
            Предлагаю пригласить петра петровича петровововивичача провести у
            нас масштабное мероприятие настолько масштабное что просто офигеть
            знаете ещё наверно классно было бы наверно если вы захотите
            придемать может что нибудь блин .
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          25 декабря 2023
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Notification"
          onClick={() => setActivateFavourite(!activateFavourite)}
        >
          <FavoriteIcon
            sx={activateFavourite ? { color: "red" } : { color: "grey" }}
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
};

export default PostCard;
