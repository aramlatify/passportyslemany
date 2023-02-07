import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  direction: 'rtl',
  typography:{
     
          fontFamily: 'rudawregular'
      ,

      htmlFontSize: '0.5em',
           body1: {
               fontSize: "1em"
    
  }
},

palette: {mode: "dark",
  background: {
    default: "#282A42"
  }

}, 
});

export default lightTheme;
