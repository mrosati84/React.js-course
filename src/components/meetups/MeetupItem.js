function MeetupItem(props) {
  return (
    <li key={props.meetup.id}>
      <h3>{props.meetup.title}</h3>
      <div>
        <img height="150" src={props.meetup.image} alt="" />
      </div>
      <div>
        <button>Add to favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
