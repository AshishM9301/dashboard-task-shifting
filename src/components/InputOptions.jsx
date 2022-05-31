import React, { useState } from "react";
import { Autocomplete, Checkbox, TextField, Button } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const InputOptions = ({ options, name, search }) => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      {!search ? (
        <Autocomplete
          multiple
          noOptionsText="No options"
          disableCloseOnSelect
          getOptionLabel={(option) => {
            return option;
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => {
            return <TextField {...params} label={`${name}s`} />;
          }}
          renderTags={(tags) => {
            return (
              <div>
                {tags.length}{" "}
                <span style={{ textTransform: "capitalize" }}>{name}</span>(s)
                Selected
              </div>
            );
          }}
        />
      ) : (
        <Autocomplete
          sx={{ width: 400 }}
          id="search"
          disableClearable
          options={options.map((option) => option)}
          renderInput={(params) => {
            console.log(params);
            return (
              <TextField
                {...params}
                label="Search Here"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default InputOptions;
