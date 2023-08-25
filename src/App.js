import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups.js';
import Favorites from './pages/Favorites.js';
import NewMeetup from './pages/NewMeetup.js';

import MainNavigation from './components/layout/MainNavigation.js';

function App() {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetup />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
