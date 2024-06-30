import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModuleList = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    // Fetch modules from the server when the component mounts
    axios.get('/api/modules')
      .then(response => {
        setModules(response.data.modules);
      })
      .catch(error => {
        console.error('Error fetching modules:', error);
      });
  }, []); 

  return (
    <div>
      <h1>List of Modules</h1>
      <ul>
        {modules.map(module => (
          <li key={module.id}>{module.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
