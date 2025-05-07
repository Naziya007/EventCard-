import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Details</h1>
      <p>You are viewing event with ID: {id}</p>
    </div>
  );
};

export default EventDetails;
