import React, { useState, useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

const AddModuleForm = () => {
  const [name, setName] = useState('');
  const { addModule } = useContext(CourseContext);

  const handleAddModule = (e) => {
    e.preventDefault();
    addModule(name);
    setName('');
  };

  return (
    <form onSubmit={handleAddModule}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Module Name"
        required
      />
      <button type="submit">Add Module</button>
    </form>
  );
};

export default AddModuleForm;
