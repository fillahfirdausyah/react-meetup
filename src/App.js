import { Route, Switch } from "react-router-dom";

// Pages
import AllMeetUpsPage from "./pages/AllMeetUps/";
import NewMeetupPage from "./pages/NewMeetUp/";
import FavoritePage from "./pages/Favorites/";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>

        <Route path="/new-meet-up">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
