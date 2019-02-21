import * as React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import {TopNav} from './components/TopNav';
import {Albums} from './containers/Albums';
import {Photos} from './containers/Photos';
import {Users} from './containers/Users';
import {Comments} from "./containers/Comments";
import {Posts} from "./containers/Posts";
import {Home} from "./containers/home";
import {Services} from "./containers/Services";

export default () => {
    return(
        <div>
            <BrowserRouter>
            <div>
            <TopNav />
                <Route path='/home' component={Home} />
                <Route path='/users' component={Users} />
                <Route path='/posts' component={Posts} />
                <Route path='/comments' component={Comments} />
                <Route path='/albums' component={Albums} />
                <Route path='/photos' component={Photos} />
                <Route path='/services' component={Services} />
             </div>
            </BrowserRouter>
        </div>

    )
}