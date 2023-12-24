import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { DeleteOutline } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useTheme } from "@emotion/react";

const PeopleCard = ({ name, email }) => {
  const theme = useTheme();
  const [deleteToogle, setDeleteToogle] = useState(false);
  const [createToogle, setCreateToogle] = useState(false);

  const deleteHandel = () => {
    setDeleteToogle((prev) => !prev);
    console.log(deleteToogle);
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
        {/* <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Popper> */}
        <IconButton aria-label="remove" onClick={deleteHandel}>
          <DeleteOutline />
        </IconButton>
      </CardContent>
      <Dialog
        open={deleteToogle}
        onClose={deleteHandel}
        maxWidth="sm"
        fullWidth="true"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0 10px 0",
          }}
        >
          Удаление
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0 10px 0",
          }}
        >
          <Box>
            <Typography fontFamily={"Montserat"}>
              Вы точно желаете удалить этого пользователя/спикера?
            </Typography>
          </Box>
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
            variant="contained"
            onClick={() => {}}
            sx={{
              color: theme.palette.primary.black,
              borderColor: theme.palette.primary.main,
            }}
          >
            Удалить
          </Button>
          <Button
            variant="contained"
            onClick={deleteHandel}
            sx={{
              color: theme.palette.primary.black,
              borderColor: theme.palette.primary.main,
            }}
          >
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default PeopleCard;
