import React from 'react' 
import ReactDom from 'react-dom'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import ProjectListPage from './components/ProjectListPage/ProjectListPage'
import StudyListPage from './components/StudyListPage/StudyListPage'
// const { hot } = require('react-hot-loader/root');

// const HotMineSearch = hot(MineSearch);

ReactDom.render(
    <>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">LandingPage</Link>
                        </li>
                        <li>
                            <Link to="/project">ProjectListPage</Link>
                        </li>
                        <li>
                            <Link to="/study">StudyListPage</Link>
                        </li>
                      
                    </ul>
                </nav>
                <Switch>
                    <Route path="/study">
                        <StudyListPage />
                    </Route>
                    <Route path="/project">
                        <ProjectListPage />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
,document.querySelector('#root'))


