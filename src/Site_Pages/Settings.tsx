import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState(''); // You can fetch the initial username from your data source

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };  

  const handleSaveChanges = () => {
    // Add logic here to save changes to the user's settings (e.g., username) to the backend
    // Display success or error messages based on the API response
    console.log('Changes saved:', { username });
  };

  const handleEraseData = () => {
    // Add logic here to erase user data from the backend
    // Display confirmation and success or error messages
    console.log('User data erased');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="username-settings">
        <h3>Change Username</h3>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
      <div className="erase-data-settings">
        <h3>Erase Data</h3>
        <p>This will erase all your data. This action cannot be undone.</p>
        <button onClick={handleEraseData} className="delete-button">Erase Data</button>
      </div>
    </div>
  );
};

export default Settings;
