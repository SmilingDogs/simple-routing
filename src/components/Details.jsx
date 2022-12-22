import React from "react";

const Details = ({ data }) => {
  console.log(data);

  const { keyPoints, links, title, type, youtube } = data;

  return (
    <div className="lesson-info">
      <h1>Lesson: {title}</h1>
      <span>type: {type}</span>
      <h3>Keyponts:</h3>
      {keyPoints?.map((task, k) => (
        <p key={k} className="task">
          {task}
        </p>
      ))}
      <h3>Links:</h3>
      {links?.map((link, h) => (
        <>
          <a href={link[1]} key={h}>
            {link[0]}
          </a>
          <br />
        </>
      ))}
      {youtube && (
        <a href={youtube} className="youtube"> Watch on Youtube!</a>
      )}
    </div>
  );
};

export default Details;
