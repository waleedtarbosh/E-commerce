import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

const AvailabelColors = ({ availabelColors }) => {

  return (
    <div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {availabelColors.map((colorItem, index) => {
            return (
              <FormControlLabel
                value={colorItem}
                control={
                  <Radio
                  sx={{marginLeft:"2px"}}
                    color="default"
                    checkedIcon={
                      <RadioButtonCheckedIcon
                        sx={{
                          backgroundColor: colorItem,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    icon={
                      <RadioButtonUncheckedRoundedIcon
                        sx={{
                          backgroundColor: colorItem,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      />
                    }
                  />
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default AvailabelColors;
