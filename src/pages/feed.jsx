import React from 'react';
import Header from "../components/header";
import FeedCard from "../components/feed/FeedCard";
import Container from "@mui/material/Container";

const Feed = () => {
    return (
        <div>
            <Header/>
            <Container sx={{ marginTop: '30px', maxWidth: '1200px' }} >
                <FeedCard/>
            </Container>
        </div>
    );
};

export default Feed;