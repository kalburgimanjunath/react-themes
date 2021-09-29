import React from 'react';
import Avatar from './Avatar';
import Contacts from './Contacts';
import Expertise from './Expertise';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Avatar />
      <br />
      <h1>Profile</h1>
      <p>
        Your profile is the most important part of the resume.If it doesn't grab
        your hiring managers attention your resume will likely go unread.DO NOT
        list your goals here,your hiring manager wants to see what you are
        qualified for,they will determine if you can complete their companies
        goals not you.Your fist line should include your professional title with
        how many year's of experence you have.Remember keep it short.No longer
        than five sentences/points.
      </p>
      <Contacts />
      <Expertise />
    </div>
  );
}
