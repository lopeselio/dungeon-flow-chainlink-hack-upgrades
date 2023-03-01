import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import Selection from './components/Selection';
import StoryBooth from './components/StoryBooth';
import App from "./components/App";
import { UserContext } from './utils/UserContext'



export default function Routes() {
    const [user, setUser] = useState(undefined)
    return (
        <BrowserRouter history={history}>
            <UserContext.Provider value={{user, setUser}}>
            <Switch>
                <Route path="/" exact component={Selection} />
                <Route path="/trophy" exact component={App} />
                <Route path="/store" exact component={StoryBooth} />
                

            </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )

}
