import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import Routes from "./routes";
import { Container } from "@material-ui/core/";
import Header from "./components/Header";
import "./global.css";
import { useEffect } from "react";

const App = () => {
  const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));

  if (localCart !== null) {
    store.dispatch({ type: "CHANGE_CART", localCart });
  }
  useEffect(() => {
    try {
      fetch("https://dio-shop.onrender.com");
    } catch {
      //
    }
  }, []);
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
