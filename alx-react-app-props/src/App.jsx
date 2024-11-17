import ProfilePage from './profilePage';
import UserContext from './userContext';
import React, { useState } from 'react';


function App() {
  const userData = useState({ name: "Jane Doe", email: "jane.doe@example.com" });
  
  return (
  <>
    <UserContext.Provider value={{userData}}>
      <ProfilePage />
    </UserContext.Provider>
  </>
  );
}

export default App;
