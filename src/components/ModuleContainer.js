import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import ModuleItem from './ModuleItem';
import '../styles/ModuleContainer.css';

const ModuleContainer = () => {
  const { modules } = useContext(CourseContext);

  return (
    <div className="module-container">
      {modules.map(module => (
        <ModuleItem key={module.id} module={module} />
      ))}
    </div>
  );
};

export default ModuleContainer;
