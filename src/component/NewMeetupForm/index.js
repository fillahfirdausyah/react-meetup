import { React, useRef } from "react";
import Card from "../card";

import SaveIcon from "@material-ui/icons/Save";

function NewMeetUpForm(props) {

  const titleRef = useRef();
  const imgRef = useRef();
  const descRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const imgLink = imgRef.current.value;
    const description = descRef.current.value;

    const meetupData = {
      title: title,
      image: imgLink,
      description: description
    };

    props.newMeetup(meetupData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Card class="card custom-card">
          <div className="card-body">
            <div class="mb-3">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Title"
                ref={titleRef}
              />
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">
                Image
              </label>
              <input
                type="text"
                class="form-control"
                id="image"
                placeholder="Link only"
                ref={imgRef}
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
                ref={descRef}
              ></textarea>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">
              Save <SaveIcon />
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
}

export default NewMeetUpForm;
