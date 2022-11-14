import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  isNote: '',
  setNote: (id) => null,
});

export const NoteContext = ({ children }) => {
  const [isNote, setNote] = useState('Lucas');

  return <UserContext.Provider value={{ isNote, setNote }}>{children}</UserContext.Provider>;
};
