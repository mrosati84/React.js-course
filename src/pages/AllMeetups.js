import MeetupList from "../components/meetups/MeetupList.js";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;
    setIsLoading(true);

    fetch(FIREBASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <div>
        <h1>All Meetups</h1>

        <MeetupList meetups={loadedMeetups} />
      </div>
    );
  }
}

export default AllMeetupsPage;
