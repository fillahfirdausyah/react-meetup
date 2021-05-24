import React from "react";
import { useHistory } from 'react-router-dom'
import Navbar from "../../component/layouts/Navbar";
import NewMeetUpForm from "../../component/NewMeetupForm";
import "./style.css";

function NewMeetUpPage() {

  const history = useHistory();

  const newMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-ac217-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers : {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container custom-container">
        <header className="text-center">
          <h1>All Meet Up</h1>
        </header>
        <section>
          <NewMeetUpForm newMeetup={newMeetupHandler} />
        </section>
      </div>
    </div>
  );
}

export default NewMeetUpPage;
