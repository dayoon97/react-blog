import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from './components/Sidebar.js';
import Login from './components/Login.js';

import Home from "./pages/Home.js";
import Post from "./pages/Post.js";
import Tags from "./pages/Tags.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Login></Login>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" component={Post} />
          <Route path="/tags" component={Tags} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;