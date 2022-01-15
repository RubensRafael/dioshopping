import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container> 
     </ThemeProvider>
    </Provider>
  )
}

export default App;
