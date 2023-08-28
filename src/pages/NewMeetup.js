import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();
  const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;

  function addMeetupHandler(meetupData) {
    fetch(FIREBASE_URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // redirect to home page
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
