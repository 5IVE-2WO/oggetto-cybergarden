import React, {useState} from 'react';
import Header from "../components/header";
import FeedCard from "../components/feed/FeedCard";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {Autocomplete, Snackbar, Stack, TextField} from "@mui/material";
import {DateTimeField} from "@mui/x-date-pickers";
import 'dayjs/locale/de';
import {useTheme} from "@mui/system";
import axios from "../utils/axios";
import dayjs from "dayjs";
import Divider from "@mui/material/Divider";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    shadowColor: '#1A2027'
}));


const Feed = () => {
    const theme = useTheme()

    const [dialogOpen, setDialogOpen] = useState(false)
  
    const dialogHandleClose = () => {
        setDialogOpen(false)
        setTitle('')
        setContent('')
        setSpeaker('')
    }

    // Сохранение и управление состояниями input
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [speaker, setSpeaker] = React.useState(null)
    const [timestamp, setTimestamp] = React.useState(dayjs('2024-01-11T10:30'))

    // Список спикеров и его получение при загрузке страницы
    const [speakers, setSpeakers] = React.useState([])

    React.useEffect(() => {
        axios.get(`/api/speaker`).then(({ data }) => {
            const newSpeakers = data.map(speaker => ({ label: speaker.name, id: speaker.id }))
            setSpeakers(prev => [...prev, ...newSpeakers])
        })
    }, [])

    const createEvent = () => {
        axios.post(`/api/event`, {
            title,
            content,
            timestamp: timestamp.$d.toLocaleString(),
            speaker_id: speaker.id
        }).then(() => {
            dialogHandleClose()
            snackbarHandleOpen()
        })
    }

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const snackbarHandleOpen = () => {
        setSnackbarOpen(true);
    };

    const snackbarHandleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <div>
            <Header/>
            <Dialog open={dialogOpen} onClose={dialogHandleClose} maxWidth="sm" fullWidth="true">
                <DialogTitle
                    sx = {{
                        display: 'flex',
                        justifyContent: "center"
                    }}
                >
                    Создание события
                </DialogTitle>
                <DialogContent
                    sx = {{
                        paddingBottom: '0'
                    }}
                >
                    <Container
                    >
                        <Typography align='center'>Основная информация</Typography>
                        <TextField
                            color = "secondary"
                            margin = "dense"
                            fullWidth
                            required
                            label = "Заголовок"
                            value = { title }
                            onChange = {
                                (event) => {
                                    setTitle(event.target.value)
                                }
                            }
                            sx = {{
                                borderColor: theme.palette.primary.black
                            }}
                        />

                        <TextField
                            margin = "dense"
                            color = "secondary"
                            fullWidth
                            required
                            label = "Описание"
                            value = { content }
                            onChange = {
                                (event) => {
                                    setContent(event.target.value)
                                }
                            }
                            multiline
                            rows = { 4 }
                        />

                        <Autocomplete
                            fullWidth
                            required
                            value = { speaker }
                            onChange = {
                                (event, newValue) => {
                                    setSpeaker(newValue)
                                }
                            }
                            options = { speakers }
                            autoHighlight
                            renderInput = {
                                (params) =>
                                    <TextField
                                        margin = "dense"
                                        required
                                        color = "secondary"
                                        label = "Ведущий спикер"
                                        {...params}
                                    />
                            }
                        />

                        <DateTimeField
                            margin = "dense"
                            color = "secondary"
                            fullWidth
                            required
                            label = "Дата проведения"
                            value = { timestamp }
                            onChange = {
                                (newValue) => setTimestamp(newValue)
                            }
                        />
                        <Divider sx = {{ marginTop: '20px', marginBottom: '20px' }}/>
                        <Typography align='center'>Раздел ссылок</Typography>
                        <Stack spacing={2}>
                            <Item>
                                <TextField
                                color = "secondary"
                                margin = "dense"
                                fullWidth
                                size='small'
                                label = "Заголовок"
                                value = { title }
                                onChange = {
                                    (event) => {
                                        setTitle(event.target.value)
                                    }
                                }
                                sx = {{
                                    borderColor: theme.palette.primary.black
                                }}
                            />
                                <TextField
                                    color = "secondary"
                                    margin = "dense"
                                    fullWidth
                                    size='small'
                                    label = "URL"
                                    value = { title }
                                    onChange = {
                                        (event) => {
                                            setTitle(event.target.value)
                                        }
                                    }
                                    sx = {{
                                        borderColor: theme.palette.primary.black
                                    }}
                                /></Item>
                        </Stack>
                    </Container>
                </DialogContent>
                <DialogActions
                    sx = {{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '16px',
                        paddingTop: '16px'
                    }}
                >
                    <Button
                        disabled = { title === '' || content === '' || !speaker }
                        variant = "contained"
                        onClick = {createEvent}
                        sx = {{
                            color: theme.palette.primary.black,
                            borderColor: theme.palette.primary.main
                        }}
                    >
                        Создать событие
                    </Button>
                    <Button
                        variant = "contained"
                        onClick = {dialogHandleClose}
                        sx = {{
                            color: theme.palette.primary.black,
                            borderColor: theme.palette.primary.main
                        }}
                    >
                        Отменить
                    </Button>

                </DialogActions>
            </Dialog>

            <Container
                sx = {{
                    marginTop: '30px',
                    maxWidth: '1200px'
                }}
            >
                <Button
                    style={{marginBottom: "10px"}}
                    variant='contained'
                    onClick={() => setDialogOpen(true)}
                >
                    Создать новое событие
                </Button>
                <FeedCard/>
            </Container>
            <Snackbar
                open = {snackbarOpen}
                autoHideDuration = {2000}
                onClose = {snackbarHandleClose}
                message = "Событие создано"
            />
        </div>
    );
};

export default Feed;