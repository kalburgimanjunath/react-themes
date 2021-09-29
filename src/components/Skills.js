import React from 'react';
export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul>
        <li>
          Decision Making
          <input type="range" value="100" />
        </li>
        <li>
          Time Management
          <input type="range" value="100" />
        </li>
        <li>
          Leadership
          <input type="range" value="100" />
        </li>
      </ul>
    </div>
  );
}
