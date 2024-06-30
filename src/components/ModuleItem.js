import React, { useState, useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import ResourceContainer from './ResourceContainer';
import AddResourceForm from './AddResourceForm';
import '../styles/ModuleItem.css';

const ModuleItem = ({ module }) => {
  const { updateModuleName, deleteModule } = useContext(CourseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(module.name);

  const handleNameUpdate = () => {
    updateModuleName(module.id, name);
    setIsEditing(false);
  };

  return (
    <div className="module-item">
      {isEditing ? (
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          onBlur={handleNameUpdate}
        />
      ) : (
        <h2 onClick={() => setIsEditing(true)}>{module.name}</h2>
      )}
      <button onClick={() => deleteModule(module.id)}>Delete</button>
      <AddResourceForm moduleId={module.id} />
      <ResourceContainer resources={module.resources} moduleId={module.id} />
    </div>
  );
};

export default ModuleItem;
