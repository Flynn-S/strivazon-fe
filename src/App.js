import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />

      {/* <Switch location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          render={(routerProps) => <HomePage {...routerProps} />}
        />
        <Route
          exact
          path="/profile"
          render={(routerProps) => (
            <ProfilePage setShowModal={...routerProps} />
          )}
        />
      </Switch> */}
    </div>
  );
}

export default App;
