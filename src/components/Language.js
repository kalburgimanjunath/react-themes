import React from 'react';
export default function Language() {
  return (
    <div className="expertise">
      <h1>Language</h1>
      <ul>
        <li>
          English
          <input type="range" value="100" />
          Fluent
        </li>
        <li>
          Hindi
          <input type="range" value="100" />
          Intermediate
        </li>
        <li>
          Kannada
          <input type="range" value="100" />
          Fluent
        </li>
      </ul>
    </div>
  );
}
