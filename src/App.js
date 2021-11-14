import "./App.css";
import HomePg from "./Pages/HomePg";
import { Route, Switch } from "react-router";
import IndividualJob from "./Components/IndividualJob/IndividualJob";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div className="headAppDiv">
            <HomePg />
          </div>
        </Route>
        <Route exact path="/jobs/:id">
          <IndividualJob />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
