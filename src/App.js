import React from 'react';
import './style.css';
import Background from './components/Background';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
export default function App() {
  return (
    <div>
      <Background />
      <Sidebar />
      <Content />
    </div>
  );
}
