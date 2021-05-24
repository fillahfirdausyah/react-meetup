import { React, useState, useEffect } from "react";
import Navbar from "../../component/layouts/Navbar";
import MeetupList from "../../component/meetups/MeetupList";
import "./style.css";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-ac217-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
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
        setLoadedMeetup(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container custom-container">
        <header className="text-center">
          <h1>All Meet Up</h1>
        </header>
        <section>
          <MeetupList data={loadedMeetup} />
        </section>
      </div>
    </div>
  );
}

export default AllMeetUpsPage;
