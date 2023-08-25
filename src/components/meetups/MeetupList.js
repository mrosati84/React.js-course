import MeetupItem from './MeetupItem.js';

function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
