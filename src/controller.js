import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Overview from "./screen/overview/Overview";
import DailyPlan from "./screen/dailyplan/DailyPlan";
function Controller() {
  return (
    <div className="Controller">
      <Router>
         <Dashboard>
           <Switch>
             <Route path='/overview' render={(props)=><Overview {...props}/>}/>
             <Route path='/dailyplan' render={(props)=><DailyPlan {...props}/>}/>
           </Switch>
         </Dashboard>
      </Router>
    </div>
  );
}

export default Controller;
