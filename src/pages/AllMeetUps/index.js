import React from "react";
import Navbar from "../../component/layouts/Navbar";
import MeetupList from "../../component/meetups/MeetupList";
import "./style.css";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Cyberpunk 2077 #1",
    image: "https://i.ytimg.com/vi/1vd0CPs-Jpg/maxresdefault.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Cyberpunk 2077 #2",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2020/12/Cyberpunk-2077-4K-Ultra-scaled.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "Cyberpunk 2077 #3",
    image:
      "https://meedios.com/wp-content/uploads/2020/09/cyberpunk-2077.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetUpsPage() {
  return (
    <div>
      <Navbar />
      <div className="container custom-container">
        <header className="text-center">
          <h1>All Meet Up</h1>
        </header>
        <section>
          <MeetupList data={DUMMY_DATA} />
        </section>
      </div>
    </div>
  );
}

export default AllMeetUpsPage;
