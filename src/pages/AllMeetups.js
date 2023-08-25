import MeetupList from '../components/meetups/MeetupList.js';

const meetups = [
  {
    id: 1,
    title: 'Meetup a Venezia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla arcu, imperdiet a ullamcorper et, mollis quis ipsum. Mauris at laoreet augue.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Saint_Mark%27s_Campanile_and_Palazzo_Ducale%2C_Venice%2C_September_2017_-2.jpg/2560px-Saint_Mark%27s_Campanile_and_Palazzo_Ducale%2C_Venice%2C_September_2017_-2.jpg',
  },
  {
    id: 2,
    title: 'Meetup a Mestre',
    description:
      'Vivamus sollicitudin viverra libero in viverra. Nulla accumsan mollis nisi non lacinia. Nullam non dolor quis neque mattis porttitor. Pellentesque iaculis felis dolor.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mestre-Tour_de_l%27horloge.jpg/1920px-Mestre-Tour_de_l%27horloge.jpg',
  },
  {
    id: 3,
    title: 'Meetup a Padova',
    description:
      'Nunc eu pellentesque nibh. Mauris non nibh congue orci ultrices mattis et at massa. Curabitur lobortis nibh a ex fermentum, ut pellentesque dolor bibendum.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Panorama_padova.jpg/2560px-Panorama_padova.jpg',
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
