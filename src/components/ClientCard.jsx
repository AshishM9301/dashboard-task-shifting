import React from "react";

import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PushPinRounded } from "@mui/icons-material";
import useClasses from "./Styles";
import { tasksCards } from "../assets/data/dummy";
import TaskCard from "./TaskCard";

import { useStateContext } from "../contexts/ContextProvider";

const styles = (theme) => ({
  cardContainer: {
    border: `1px solid ${grey[700]}`,
    borderRadius: "5px",
    padding: "10px 25px",
    marginRight: "10px",
  },
  cardHeading: {
    width: "350px !important",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const ClientCard = ({ title }) => {
  const classes = useClasses(styles);

  const { clientCard, setClientCard } = useStateContext();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeading}>
        <div>{title}</div>
        <div>
          <IconButton
            onClick={() => setClientCard([...clientCard, { title: title }])}
          >
            <PushPinRounded />
          </IconButton>
        </div>
      </div>

      <div>
        <div>
          {tasksCards.map((taskCard) => (
            <TaskCard title={taskCard.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
