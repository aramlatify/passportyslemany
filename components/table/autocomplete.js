import { TextField, Autocomplete } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

import Stack from "@mui/material/Stack";

import { inputClasses } from "@mui/material/Input";

import { Chip } from "@mui/material";





export default function MultiSelect({
  items,
  
  selectedOptions,
  onChange
}) {
  const CssTextField = styled(TextField)({
    "& .MuiInputBase-input": {
      fontSize: 24,
      Color: "white"
     
    },
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottom: "2px solid green !important"
      },
      "&:after": {
        borderBottom: "2px solid white !important"
      },
      [`&:hover:not(${inputClasses.disabled}):not(${inputClasses.focused}):not(${inputClasses.error}):before`]: {
        borderBottom: "2px solid white !important"
      }
    },
    input: {
      "&::selection": {
        backgroundColor: "lightgreen",
        color: "blue"
      }
    },
    "& label": {
      color: "white" ,
      left: "0.75rem",
      
      transformOrigin: "right",
      fontSize: "1 rem",
    },
    "& legend": {
    
      color: "white" ,
      textAlign: "right",
      
    },
  });
  const tfStyle = {
    "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
      color: "blue",
      visibility: "visible"
    }
  };
  const root = {
    
   
    color: "white",
    fontSize: 18,
    "& :hover": {
      color: "brown"
    },
    "& li": {
      //list item specific styling
      border: "0.1px solid white",
      
    }
  };
  const theme = useTheme();
  return (
    <Stack  sx={{ width: 305 }}>
     
          <Autocomplete
            ListboxProps={{ sx: root }}
            sx={tfStyle}
            renderTags={(value, getTagProps) =>
              value.map((items, index) => (
                <Chip
                 key={index}
                  sx={{
                    height: 24,
                    position: "relative",
                    zIndex: 0,
                    backgroundColor: "pink",
                    "& .MuiChip-label": {
                      color: "red"
                    },
                    "& .MuiChip-root": {
                      borderRadius: "20px"
                    },
                    "& .MuiChip-deleteIcon": {
                      color: "blue"
                    },
                    "&:after": {
                      content: '""',
                      right: 10,
                      top: 6,
                      height: 12,
                      width: 12,
                      position: "absolute",
                      backgroundColor: "white",
                      zIndex: -1
                    }
                  }}
                  variant="outlined"
                  label={items}
                  {...getTagProps({ index })}
                />
              ))
            }
            multiple
            options={items}
            value={selectedOptions}
            onChange={onChange}
            renderInput={(params) => (
              <CssTextField
                variant="standard"
                sx={{
                 
                 
                  marginLeft: theme.spacing(1),
                  marginRight: theme.spacing(1),
                  
                  "@media (max-width: 780px)": {
                    width: "100%"
                  }
                }}
                {...params}
                label="شوێن"
               
                
              />
            )}
          />
      
    </Stack>
  );
}

MultiSelect.defaultProps = {
  items: [],
  selectedValues: []
};
