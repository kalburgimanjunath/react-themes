import React from 'react';
import Avatar from './Avatar';
import Contacts from './Contacts';
import Expertise from './Expertise';
import Awards from './Awards';
import Interest from './Interest';
import Awards from './Awards';
import Skills from './Skills';
import Language from './Language';
import Aboutme from './Aboutme';
export default function Sidebar({ type }) {
  return (
    <div className="sidebar">
      {type === 'resume' ? (
        <div>
          <Avatar />
          <h1>Profile</h1>
          <Aboutme />
          <Contacts />
          <Expertise />
          <Skills />
          <Awards />
          <Interest />
          <Language />
        </div>
      ) : (
        <div>
          <Avatar />
          <Contacts />
        </div>
      )}
    </div>
  );
}
