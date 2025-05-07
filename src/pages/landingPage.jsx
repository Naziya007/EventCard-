import React from 'react';
import EventCard from '../components/EventCard';
// import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const events = [
    { id: 1, title: 'SHERLOCKED', description: 'An online fresure hunt filled with cleaver riddles and mystery-solving.' },
    { id: 2, title:'FOUNDERS DEN',  description: 'A two-day challange to showcase student innovations pitching and prototyping.' },
    { id: 3, title:'DOMINION',  description: 'An esports tournament on Discord with live streams and cash prizes for top players.' },
    { id: 4, title:'VR EXPO', description: 'Explore virtual reality hands-on while learning the tech behind the scenes.' },
    { id: 5, title:'STRATOSPHERE', description: 'Discover drone tech and aerospace innovations through live showcases.' },
    { id: 6, title:'CRAFFITI',  description: 'Join others in a fun scribble.io event blending creativity and teamwork.' },
    { id: 7, title:'BLIND CODE', description: 'A unique coding event where one guides a blindfolded partner to complete pattern.' },
    { id: 8, title:'SNIPPETS',  description: 'A quirky competition for creating and cracking cryptic code one-liners.' }
  ];

  return (
    <div style={{ padding: '20px',
        display:'flex',
        flexWrap:'wrap',
        gap:"16px",
        overflowX:'auto',
        
    
     }}>
      {/* <h1>Zealicon Events</h1> */}
    

      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default LandingPage;