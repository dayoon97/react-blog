import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from './components/Sidebar.js';
import Login from './components/Login.js';

import Home from "./pages/Home.js";
import Members from "./pages/Members.js";
import Cashes from "./pages/Cashes.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Login></Login>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/cashes" component={Cashes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;