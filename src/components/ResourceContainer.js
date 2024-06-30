import React from 'react';
import ResourceItem from './ResourceItem';
import '../styles/ResourceContainer.css';

const ResourceContainer = ({ resources, moduleId }) => {
  return (
    <div className="resource-container">
      {resources.map(resource => (
        <ResourceItem key={resource.id} resource={resource} moduleId={moduleId} />
      ))}
    </div>
  );
};

export default ResourceContainer;
