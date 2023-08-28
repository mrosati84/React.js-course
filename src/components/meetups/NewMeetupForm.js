import Card from "../ui/Card";
import Button from "../ui/Button";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const formData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };

    // forward to parent component. See src/pages/NewMeetup.js
    props.onAddMeetup(formData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <Button>Add Meetup</Button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
