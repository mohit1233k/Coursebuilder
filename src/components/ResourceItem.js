import React, { useState, useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import '../styles/ResourceItem.css';

const ResourceItem = ({ resource, moduleId }) => {
  const { updateResource, deleteResource } = useContext(CourseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(resource.name);

  const handleNameUpdate = () => {
    updateResource(moduleId, resource.id, { ...resource, name });
    setIsEditing(false);
  };

  return (
    <div className="resource-item">
      {isEditing ? (
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          onBlur={handleNameUpdate}
        />
      ) : (
        <p onClick={() => setIsEditing(true)}>{resource.name}</p>
      )}
      <button onClick={() => deleteResource(moduleId, resource.id)}>Delete</button>
    </div>
  );
};

export default ResourceItem;
