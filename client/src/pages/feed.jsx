import React, {useState} from 'react';
import Header from "../components/header";
import FeedCard from "../components/feed/FeedCard";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {Autocomplete, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";

const Feed = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    const lektors = [
        {label: 'Maksim'},
        {label: 'Nikita'},
        {label: 'Egor'},
        {label: 'Maksim'}
    ]
    return (
        <div>
            <Header/>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth="true">
                <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItem: "center"}}>
                    <DialogTitle>
                        Создание события
                    </DialogTitle>
                </Box>
                <DialogContent>
                    <Container>
                            <TextField
                                id="outlined-multiline-static"
                                label="Название"
                                multiline
                                maxRows={3}
                                sx={{width: "100%", marginBottom: "10px"}}
                            />

                            <TextField
                                id="outlined-multiline-static"
                                label="Описание"
                                multiline
                                rows={4}
                                sx={{width: "100%", marginBottom: "10px"}}
                            />

                            <Autocomplete
                                id="country-select-demo"
                                sx={{width: "100%", marginBottom: "10px"}}
                                options={lektors}
                                autoHighlight
                                renderInput={(params) => <TextField label="Выбор лектора" {...params}/>}
                            />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{width: "100%"}}/>
                            </LocalizationProvider>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Создать</Button>
                </DialogActions>
            </Dialog>

            <Container sx={{ marginTop: '30px', maxWidth: '1200px' }} >
                <Button style={{marginBottom: "10px"}} variant='contained' onClick={() => setOpen(true)}>Создать новое событие</Button>
                <FeedCard/>
            </Container>
        </div>
    );
};

export default Feed;