import React from 'react';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const UserCard = () => {
    return (
        <Card minWidth="270px" sx={{border: "1px solid black"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    test
                </Typography>
                <Typography variant="h5" component="div">
                    test
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    test
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;