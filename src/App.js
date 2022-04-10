
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetail from './BlogDetail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
function App() {

    
    return (
      <Router>
        <div className="app">
            <Navbar />
             
            <div className="content">
             <Switch>
                 <Route exact path='/'>
                 <Home />
                 </Route>
             </Switch>

             <Switch>
                 <Route path='/Create'>
                     <Create />

                 </Route>
             </Switch>

             <Switch>
                 <Route path="/blog/:id">
                 <BlogDetail />
                 </Route>
                 
             </Switch>

         
            </div>

        </div>
        </Router>
        
    );
}

export default App;