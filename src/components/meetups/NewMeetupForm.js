import Card from "../ui/Card";
import Button from "../ui/Button";

function NewMeetupForm() {
  return (
    <Card>
      <form>
        <div>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" />
        </div>
        <div>
          <label htmlFor="description">Meetup description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div>
          <Button>Add Meetup</Button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
