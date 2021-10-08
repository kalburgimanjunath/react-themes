import React from 'react';
import Background from '../components/Background';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
export default function Form() {
  return (
    <div>
      <Background />
      <Sidebar type="resume" />
      <Content />
    </div>
  );
}
