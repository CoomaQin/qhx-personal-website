import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      main: '#64EAEC',
      tag: '#C236F2',
      title: '#FFF'
    },
    background: {
      default: 'black',
    },
  },
  background:{
    image: "url(https://i.loli.net/2021/08/02/TvYdfA1V3eyHw5h.jpg)"
  }
});

export default theme;
