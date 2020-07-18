import React from "react";

const Charactercast = ({ cast }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={cast.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{cast.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {cast.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {cast.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {cast.birthday}
            </li>
            <li>
              <strong>Status:</strong> {cast.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Charactercast;
