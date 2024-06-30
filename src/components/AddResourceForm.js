import React, { useState } from 'react';

const AddResourceForm = ({ moduleId }) => {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleAddResource = (e) => {
    e.preventDefault();
    
    // Call the function to save the file locally
    saveFileLocally(file);

    // Display confirmation message
    setConfirmationMessage('Resource added successfully');

    // Clear input fields after adding resource
    setName('');
    setFile(null);
  };

  const saveFileLocally = (file) => {
    if ('showDirectoryPicker' in window) {
      window.showDirectoryPicker().then(async (directoryHandle) => {
        const fileHandle = await directoryHandle.getFileHandle(file.name, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(file);
        await writable.close();
        console.log('File saved locally:', fileHandle.name);
      }).catch((error) => {
        console.error('Error saving file locally:', error);
      });
    } else {
      console.error('File System API is not supported');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddResource}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Resource Name"
          required
        />
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Add Resource</button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default AddResourceForm;
