import React from "react";

function SubjectCard({ subject, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={subject} />
      <h3>{subject}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SubjectCard;
