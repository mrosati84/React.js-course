import MeetupList from '../components/meetups/MeetupList.js';

const meetups = [
  {
    id: 1,
    title: 'My first meetup!',
    description: 'bla bla',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'My second meetup',
    description: 'bla bla',
    image: 'https://placehold.co/600x400',
  },
];

function AllMeetupsPage() {
  return (
    <div>
      <h1>All Meetups</h1>

      <MeetupList meetups={meetups} />
    </div>
  );
}

export default AllMeetupsPage;
