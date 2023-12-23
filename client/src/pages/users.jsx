import React, {useState} from 'react';
import Header from "../components/header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import UserCard from "../components/users/UserCard";

const Users = () => {
    const [page, setPage] = useState(false)

    const users = [
        {name: "Рябичев Максим Максимович", email: "ryabichev@sfedu.ru"},
        {name: "Черненко Максим Игоревич", email: "chernenko@sfedu.ru"},
    ]

    const lecturers = [
        {name: "Скрябин Егор Юрьевич", email: "skriabin@sfedu.ru"},
        {name: "Бочаров Никита Андреевич", email: "bocharov@sfedu.ru"}
    ]
    return (
        <div>
            <Header/>
            <Container sx={{display: "flex", justifyContent: "space-around", gap: "5px", marginTop: "30px"}}>
                <Button size='large' disabled={!page}  variant='contained' fullWidth={true} fullHeight={true} sx={{maxWidth: "300px", height: "50px"}} onClick={() => setPage(false)}>Пользователи</Button>
                <Button size='large' disabled={page} variant='contained' fullWidth={true} fullHeight={true} sx={{maxWidth: "300px", height: "50px"}} onClick={() => setPage(true)}>Лекторы</Button>
            </Container>
            {
                !page
                    ?
                    <Container sx={{display: "flex", flexDirection: "column", gap: "10px", marginTop: "30px"}}>
                        {users.map((user) => (
                            <UserCard name={user.name} email={user.email}/>
                        ))}
                    </Container>
                    :
                    <Container sx={{display: "flex", flexDirection: "column", gap: "10px", marginTop: "30px"}}>
                        {lecturers.map((lector) => (
                            <UserCard name={lector.name} email={lector.email}/>
                        ))}
                    </Container>
            }


        </div>
    );
};

export default Users;