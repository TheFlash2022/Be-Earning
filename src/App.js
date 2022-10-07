import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import TestBeEarning from "./components/TestBeEarning";
import CreateNewWallet from "./pages/CreateNewWallet";
import Confirm from "./pages/Confirm";

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={TestBeEarning} />
        <Route exact path="/createnewwallet" component={CreateNewWallet} />
        <Route exact path="/createnewwallet/confirm" component={Confirm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
