import Card from "../ui/Card.js";
import Button from "../ui/Button.js";
import classes from "./MeetupItem.module.scss";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context.js";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.meetup.id,
        title: props.meetup.title,
        description: props.meetup.description,
        image: props.meetup.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <h3>{props.meetup.title}</h3>
        <p>{props.meetup.description}</p>
        <div>
          <img height="150" src={props.meetup.image} alt="" />
        </div>
        <div>
          <Button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </Button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
