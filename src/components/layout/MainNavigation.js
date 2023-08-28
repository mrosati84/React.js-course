import { Link } from "react-router-dom";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context.js";

import classes from "./MainNavigation.module.scss";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <h3>React Meetups</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites ({favoritesCtx.totalFavorites})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
