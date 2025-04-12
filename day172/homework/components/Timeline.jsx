import React from 'react';
import './Timeline.css';  

const Timeline = () => {
  const timelineData = [
    {  title: 'Started learning React', description: 'Began my journey with React.js.' },
    {  title: 'Worked on my first project', description: 'Built a personal portfolio site.' },
    {  title: 'Joined a Web Development team', description: 'Started working at a tech company as a frontend developer.' },
    { title: 'Built a full-stack application', description: 'Created a full-stack web application using React and Node.js.' },
  ];

  return (
    <section className="timeline">
      <h2 className="timeline-title">My Career Timeline</h2>
      <div className="timeline-container">
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
