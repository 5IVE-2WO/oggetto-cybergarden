import React from 'react';
import Header from "../components/header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import UserCard from "../components/users/UserCard";

const Users = () => {
    const buttons = ["Пользователи", "Лекторы"]
    return (
        <div>
            <Header/>
            <Container sx={{display: "flex", justifyContent: "space-around", gap: "5px", marginTop: "30px"}}>
                {buttons.map(name => (
                    <Button size='large' variant='contained' fullWidth={true} fullHeight={true} sx={{maxWidth: "300px", height: "50px"}}>{name}</Button>
                ))}
            </Container>
            <Container sx={{display: "flex", flexDirection: "column", gap: "10px", marginTop: "30px"}}>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </Container>
        </div>
    );
};

export default Users;