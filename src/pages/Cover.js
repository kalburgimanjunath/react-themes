import React from 'react';
import Background from '../components/Background';
import Sidebar from '../components/Sidebar';
import CoverContent from '../components/CoverContent';
export default function Cover() {
  return (
    <div>
      <Background />
      <Sidebar />
      <CoverContent />
    </div>
  );
}
