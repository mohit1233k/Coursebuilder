import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [modules, setModules] = useState([]);

  const addModule = (moduleName) => {
    const newModule = { id: uuidv4(), name: moduleName, resources: [] };
    setModules([...modules, newModule]);
  };

  const updateModuleName = (id, newName) => {
    setModules(modules.map(module => 
      module.id === id ? { ...module, name: newName } : module
    ));
  };

  const deleteModule = (id) => {
    setModules(modules.filter(module => module.id !== id));
  };

  const addResource = (moduleId, resource) => {
    setModules(modules.map(module => 
      module.id === moduleId ? { ...module, resources: [...module.resources, resource] } : module
    ));
  };

  const updateResource = (moduleId, resourceId, updatedResource) => {
    setModules(modules.map(module => 
      module.id === moduleId 
        ? { 
            ...module, 
            resources: module.resources.map(resource => 
              resource.id === resourceId ? updatedResource : resource
            ) 
          } 
        : module
    ));
  };

  const deleteResource = (moduleId, resourceId) => {
    setModules(modules.map(module => 
      module.id === moduleId 
        ? { ...module, resources: module.resources.filter(resource => resource.id !== resourceId) } 
        : module
    ));
  };

  return (
    <CourseContext.Provider value={{
      modules, addModule, updateModuleName, deleteModule,
      addResource, updateResource, deleteResource
    }}>
      {children}
    </CourseContext.Provider>
  );
};
