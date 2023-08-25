import Card from '../ui/Card.js';
import Button from '../ui/Button.js';
import classes from './MeetupItem.module.scss';

function MeetupItem(props) {
  return (
    <li key={props.meetup.id} className={classes.item}>
      <Card>
        <h3>{props.meetup.title}</h3>
        <p>{props.meetup.description}</p>
        <div>
          <img height="150" src={props.meetup.image} alt="" />
        </div>
        <div>
          <Button>Add to favorites</Button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
