import React from 'react';
import Background from '../components/Background';
import Sidebar from '../components/Sidebar';
import FormContent from '../components/FormContent';
export default function Form() {
  return (
    <div>
      <Background />
      <Sidebar type="resume" />
      <FormContent />
    </div>
  );
}
