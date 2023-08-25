import MeetupItem from './MeetupItem.js';
import classes from './MeetupList.module.scss';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
