import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Sigin from "./components/Sigin.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import Teacher from "./components/Teacher";
import MakeAQuiz from "./components/MakeAQuiz";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
        <Route  path="/signin">
          <Sigin />
          </Route>
        <Route  path="/teacher">
          <Teacher />
          </Route>
        <Route  path="/MakeAQuiz">
          <MakeAQuiz />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
