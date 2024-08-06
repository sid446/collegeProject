import { color } from 'framer-motion';
import React from 'react';

// Sample profile data
const profiles = [
  {
    name: 'Sidhant Singh',
    subject: 'Computer Science',
    imageUrl: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Katsuki-Bakugo.My-Hero-Academia.webp'
  },
  {
    name: 'Ananya Gupta',
    subject: 'Mathematics',
    imageUrl: 'https://4kwallpapers.com/images/wallpapers/dabi-my-hero-academia-1920x1200-10387.jpg'
  },
  {
    name: 'Amit Sharma',
    subject: 'Physics',
    imageUrl: 'https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/12/maxresdefault-20-1.jpg   '
  }, {
    name: 'Ananya Gupta',
    subject: 'Mathematics',
    imageUrl: 'https://4kwallpapers.com/images/wallpapers/dabi-my-hero-academia-1920x1200-10387.jpg'
  }, {
    name: 'Sidhant Singh',
    subject: 'OOPS',
    imageUrl: 'https://avatarfiles.alphacoders.com/365/365096.png'
  }, {
    name: 'Smarth Verma',
    subject: 'DBMS',
    imageUrl: 'https://pics.craiyon.com/2023-09-28/565208d2f4bc4496b84deddd8304c772.webp'
  }, {
    name: 'Sathak Chandel',
    subject: 'Python',
    imageUrl: 'https://wallpapers.com/images/hd/sabito-mask-demon-slayer-pfp-8h0vih159fk927hd.jpg'
  },    
];

function ProfileCard({ name, subject, imageUrl }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '10px',
    backgroundColor: '#595E77',
    maxWidth: '300px',
    margin: '10px auto'

  };

  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '15px'
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    color:"white"
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
    
  };

  const subjectStyle = {
    fontSize: '16px',
    color: '#555',
    margin: '0',
    color:"#DFDFDF"
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Profile" style={imageStyle} />
      <div style={textStyle}>
        <p style={nameStyle}>{name}</p>
        <p style={subjectStyle}>{subject}</p>
      </div>
    </div>
  );
}

function ProfileList() {
  return (
    <div>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          subject={profile.subject}
          imageUrl={profile.imageUrl}
        />
      ))}
    </div>
  );
}

export default ProfileList;
