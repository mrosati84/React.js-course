import MeetupList from '../components/meetups/MeetupList.js';

const meetups = [
  {
    id: 1,
    title: 'My first meetup!',
    description: 'bla bla',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Saint_Mark%27s_Campanile_and_Palazzo_Ducale%2C_Venice%2C_September_2017_-2.jpg/2560px-Saint_Mark%27s_Campanile_and_Palazzo_Ducale%2C_Venice%2C_September_2017_-2.jpg',
  },
  {
    id: 2,
    title: 'My second meetup',
    description: 'bla bla',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: 3,
    title: 'My third meetup',
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
