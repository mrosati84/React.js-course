import Card from '../ui/Card.js';

function MeetupItem(props) {
  return (
    <li key={props.meetup.id}>
      <Card>
        <h3>{props.meetup.title}</h3>
        <div>
          <img height="150" src={props.meetup.image} alt="" />
        </div>
        <div>
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
