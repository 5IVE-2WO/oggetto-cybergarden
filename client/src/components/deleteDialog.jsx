import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";

const DeleteDialog = (props) => {
  const theme = useTheme();

  return (
    <Dialog
      open={props.toogleConst}
      onClose={props.toogleFunction}
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
          <Typography fontFamily={"Montserat"}>{props.text}</Typography>
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
          onClick={props.toogleFunction}
          sx={{
            color: theme.palette.primary.black,
            borderColor: theme.palette.primary.main,
          }}
        >
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
