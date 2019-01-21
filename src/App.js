import React, { useState } from 'react';
import { Navbar } from './Navbar';
import './App.css';
import './Bulma.sass';
import { fakeUser } from './fakeUser';

export const App = () => {
  const [user, setUser] = useState(null);

  return <Navbar user={user} onSignIn={() => setUser(fakeUser)} />;
};
