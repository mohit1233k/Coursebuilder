import React from 'react';
import { CourseProvider } from '../context/CourseContext';
import ModuleContainer from './ModuleContainer';
import AddModuleForm from './AddModuleForm';
import '../styles/App.css';

const App = () => {
  return (
    <CourseProvider>
      <div className="app">
        <h1>Course Builder</h1>
        <AddModuleForm />
        <ModuleContainer />
      </div>
    </CourseProvider>
  );
};

export default App;
