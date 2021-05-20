import React from "react";
import Card from "../card";

function MeetupItem(props) {
  return (
    <Card class="card custom-card">
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href="#" class="btn btn-primary">
          Details
        </a>
      </div>
    </Card>
  );
}

export default MeetupItem;
