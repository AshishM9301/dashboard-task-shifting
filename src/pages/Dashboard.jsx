import { TextField, Typography, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { teal } from "@mui/material/colors";

import useClasses from "../components/Styles";
import Header from "../components/Header";
import InputOptions from "../components/InputOptions";
import ClientCard from "../components/ClientCard";

import { clientsCards } from "../assets/data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const useStyles = (theme) => ({
  inputOptions: {
    display: "flex",
    marginTop: "20px",
    "& div": {
      marginRight: "10px",
    },
  },
  clientsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  clients: {
    width: "50%",
    height: "100vh",
    overflowX: "scroll",
    marginTop: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    border: `1px solid ${teal[500]}`,
    borderRadius: "10px",
    padding: "10px 20px",
  },
});

const clients = ["Indigo", "Rainbow", "Client3"];
const services = ["Service 1", "Service 2", "Service 3"];
const tasks = ["Task 1", "Task 2", "Task 3"];

const Dashboard = () => {
  const classes = useClasses(useStyles);

  const { clientCard } = useStateContext();

  const [Pinned, setPinned] = useState([]);

  return (
    <Box sx={{ padding: "20px " }}>
      <Header />
      <div>
        <Typography variant="body1" color="secondary">
          Brief intro to the page functionality will be listed here.
        </Typography>
      </div>
      <div className={classes.inputOptions}>
        <InputOptions options={clients} name="Client" />
        <InputOptions options={services} name="Service" />
        <InputOptions options={tasks} name="Task" />
        <InputOptions options={clients} search />
      </div>
      <div className={classes.clientsContainer}>
        <div className={classes.clients} style={{ marginRight: "20px" }}>
          {clientsCards.map((client) => (
            <ClientCard title={client.title} />
          ))}
        </div>
        <div className={classes.clients}>
          {clientCard.map((client) => (
            <ClientCard title={client.title} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
