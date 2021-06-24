import './App.css';
import Create from './components/create/create';
import Read from './components/read/read'
import Update from './components/update/update'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="application">
      <div className="heading">
    <h1> REACT CRUD APPLICATION</h1>
    </div>
    <div style={{marginTop: 20}}>
     <Route path = '/create' component = {Create} />
    </div>
    <div style={{marginTop: 20}}>
     <Route exact path = '/' component = {Read} />
    </div>

    <Route  path = '/update' component = {Update}/>
    </div>
    </Router>
  );
}

export default App;
