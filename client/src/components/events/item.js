import React from "react";
import { Link } from "react-router-dom";
const EventItem = ({ event }) => {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-3">
          <h6>
            <strong>{event.eventDate}</strong>
          </h6>
        </div>
        <div className="col-9">
          <Link to={`/events/${event._id}`}>
            <h6 style={{ fontWeight: "normal" }}>
              <strong>{event.name}</strong>
            </h6>
            <p>
              {event.eventTime} - {event.location} <br /> {event.city},
              {event.state}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
