import React from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <>
      {props.data.map((x) => (
        <MeetupItem
          key={x.id}
          id={x.id}
          image={x.image}
          title={x.title}
          description={x.description}
        />
      ))}
    </>
  );
}

export default MeetupList;
