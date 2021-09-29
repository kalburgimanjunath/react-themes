import React from 'react';
export default function Expertise() {
  return (
    <div className="expertise">
      <h1>Expertise</h1>
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
