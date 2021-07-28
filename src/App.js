import logo from './logo.svg';
import './App.css';
import ViewAllPosts from './components/ViewAllPosts';
import SinglePost from './components/SinglePost'
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/allposts'} exact component={ViewAllPosts}/>
          <Route path={'/singlepost'} component={SinglePost}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
