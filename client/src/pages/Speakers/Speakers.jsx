import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { DeleteOutline } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { IconButton } from "@mui/material";
import "../Speakers/Speakers.css";
const Speakers = () => {
  const [currentSpeaker, setCurrentSpeaker] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/speakers/${id}`).then(({ data }) => {
      const respons = data;
      setCurrentSpeaker(respons);
    });
  });
  return (
    <div className="Speakers__wrapper">
      <div className="Speakers__main">
        <img
          className="Speakers__img"
          src={currentSpeaker.image}
          alt="Speaker"
        />
        <p className="Speakers__name">{currentSpeaker.name}</p>
        <p className="Speakers__specialization">
          {currentSpeaker.specialization}
        </p>
      </div>
      <p>{currentSpeaker.about}</p>
      <IconButton aria-label="editing">
        <CreateIcon />
      </IconButton>
      <IconButton aria-label="trash">
        <DeleteOutline />
      </IconButton>
    </div>
  );
};

export default Speakers;
