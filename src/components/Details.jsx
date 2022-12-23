import React from "react";

const Details = ({ data }) => {
  
  const { keyPoints, links, title, type, youtube } = data;

  return (
    <div className="lesson-info" key={title}>
      <h1>Lesson: {title}</h1>
      <span>type: {type}</span>
      <h3>Keyponts:</h3>
      {keyPoints?.map((task, k) => (
        <p key={k} className="task">{task}</p>
      ))}
      <h3>Links:</h3>
      {links?.map((link, h) => (
        <>
          <a href={link[1]} target='_blank' rel="noreferrer" key={h}>{link[0]}</a>
          <br />
        </>
      ))}
      {youtube && (
        <a href={youtube} target='_blank' rel="noreferrer" className="youtube"> Watch on Youtube!</a>
      )}
    </div>
  );
};

export default Details;
