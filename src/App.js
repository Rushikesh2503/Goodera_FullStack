import "./App.css";
import HomePg from "./Pages/HomePg";
import { Route, Routes } from "react-router";
import IndividualJob from "./Components/IndividualJob/IndividualJob";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/">
          <>
            <div className="headAppDiv">
              <HomePg />
            </div>
          </>
        </Route>
        <Route exact path="/jobs/:id">
          <IndividualJob />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
