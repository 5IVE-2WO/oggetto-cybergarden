import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { DeleteOutline } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
import DeleteDialog from "../deleteDialog";
import { useTheme } from "@emotion/react";

const PeopleCard = ({ name, email }) => {
  const [deleteToogle, setDeleteToogle] = useState(false);

  const deleteHandel = () => {
    setDeleteToogle((prev) => !prev);
  };
  return (
    <Card
      minWidth="270px"
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.42)",
        boxShadow:
          "0px 1px 1px 1px rgba(0,0,0,0.12) 0px 1px 1px 0px rgba(0,0,0,0.12)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            РМ
          </Avatar>
        }
        title={name}
        subheader={email}
      />
      <CardContent>
        <IconButton aria-label="editing">
          <CreateIcon />
        </IconButton>
        <IconButton aria-label="remove" onClick={deleteHandel}>
          <DeleteOutline />
        </IconButton>
      </CardContent>
      <DeleteDialog
        text={"Вы точно хотите удалить этого пользователя/спикера?"}
        toogleFunction={deleteHandel}
        toogleConst={deleteToogle}
      />
    </Card>
  );
};

export default PeopleCard;
