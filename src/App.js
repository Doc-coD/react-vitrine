import React from 'react';
import { Redirect, Route,  Switch } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Project1, Project2, Project3, Project4 } from './Pages/Projects';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/project1" component={Project1} />
            <Route exact path="/project2" component={Project2} />
            <Route exact path="/project3" component={Project3} />
            <Route exact path="/project4" component={Project4} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>   
    )
}


export default App;

