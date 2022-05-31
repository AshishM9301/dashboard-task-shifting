import React from "react";

import {
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import useClasses from "./Styles";

const styles = (theme) => ({});

const TaskCard = ({ title }) => {
  const classes = useClasses(styles);

  return (
    <Card sx={{ maxWidth: 345, marginTop: "25px" }} variant="outlined">
      <CardHeader
        action={
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        }
        title={title}
      />

      <Box sx={{ display: "flex", width: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Typography
              component="div"
              variant="subtitle2"
              color="text.secondary"
            >
              Not Started
            </Typography>

            <ButtonGroup disableElevation variant="contained">
              <Button size="small" color="secondary" sx={{ width: "10px" }}>
                2
              </Button>
              <Button>8</Button>
            </ButtonGroup>
          </div>

          <div style={{ marginLeft: "36px" }}>
            <Typography
              component="div"
              variant="subtitle2"
              color="text.secondary"
            >
              In Progress
            </Typography>

            <ButtonGroup disableElevation variant="contained">
              <Button size="small" color="secondary" sx={{ width: "10px" }}>
                2
              </Button>
              <Button>8</Button>
            </ButtonGroup>
          </div>

          <div style={{ marginLeft: "36px" }}>
            <Typography
              component="div"
              variant="subtitle2"
              color="text.secondary"
            >
              Completed
            </Typography>

            <ButtonGroup disableElevation variant="contained">
              <Button size="small" color="secondary" sx={{ width: "10px" }}>
                2
              </Button>
              <Button>8</Button>
            </ButtonGroup>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TaskCard;
