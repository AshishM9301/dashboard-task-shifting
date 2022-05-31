import { TextField, Typography, Box, IconButton } from "@mui/material";
import React, { useState } from "react";

import { DatePicker } from "@mui/x-date-pickers";
import useClasses from "../components/Styles";
import { ArrowDropDown } from "@mui/icons-material";

const useStyles = (theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  input: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "150px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
  },
  div: {
    margin: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Header = () => {
  const [value, setValue] = useState(new Date());
  const classes = useClasses(useStyles);
  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.heading}>
          <Typography variant="h5" color="secondary">
            Status Monitor
          </Typography>

          <div className={classes.div}>
            <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => {
                params.inputProps.disabled = true;

                return <TextField {...params} />;
              }}
              InputProps={{
                disableUnderline: true,
                className: classes.input,
              }}
            />
            <IconButton>
              <ArrowDropDown />
            </IconButton>
          </div>
        </div>
        <div>A</div>
      </div>
    </div>
  );
};

export default Header;
