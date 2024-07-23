import React, { useState } from 'react';
import LabelButton from './LabelButton'; // Import the LabelButton component a

function EventInformation({ event }) {
  // Destructure event properties
  const { id, eventName, description, date, image, location, organizer } = event;
  const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option

  // Function to handle option changes
  const handleOptionChange = (option) => {
    setSelectedOption((prevOption) => {
      const newOption = prevOption === option ? null : option; // Toggle selection
      console.log(`Changing selected option from ${prevOption} to ${newOption}`); // Log the change
      return newOption; // Update state
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={image} className="card-img-top" alt={eventName} />
        <div className="card-body">
          <h5 className="card-title">{eventName} </h5>
          <p>{description}</p>
          <p><strong>Date:</strong> {date} </p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Organizer:</strong> {organizer}</p>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <LabelButton
              icon="bi bi-star"
              id="interested"
              label="Interested"
              onClick={handleOptionChange}
              isSelected={selectedOption === 'interested'}
            />
            <LabelButton
              icon="bi bi-check-circle"
              id="going"
              label="Going"
              onClick={handleOptionChange}
              isSelected={selectedOption === 'going'}
            />
            <LabelButton
              icon="bi bi-share"
              id="maybe"
              label="Share"
              onClick={handleOptionChange}
              isSelected={selectedOption === 'maybe'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventInformation;
