import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const EventCard = ({ event }) => {
  const { title, date, description } = event;
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/events/${id}`); // navigates to EventDetails page
  };


  return (
    <div style={{
      border: '2px solid white',
      borderRadius:'30px',
      width:'346px',
      height:'430px',
      display:'flexbox',
      padding: '10px',
      margin: '60px 5px ',
      backgroundColor:'black',
    }}>
      <h4 style={{backgroundColor:'black',color:'#FFFFFF', fontSize:'20px',textAlign:'center',border:'0.5px solid whitesmoke',borderRadius:'20px',padding:'5px 5px',width:'200px',marginLeft:'55px',marginTop:'10px'}} >{title}</h4>
      <p style={{backgroundColor:'black',color:'white'}}> {date}</p>
      <p style={{backgroundColor:'black',color:'	#E5E5E5' ,fontFamily:'sans-serif',fontSize:'20px',textAlign:'center' ,fontWeight:'1px',padding:'10px 10px'}}>{description}</p>
      <div style={{textAlign:'center',backgroundColor:'black' }}><Button onClick={handleRegister}  style={{backgroundColor:'black',border:'2px solid white', textAlign:'center',}}>Register</Button></div>
    
    </div>
  );
};

export default EventCard;
