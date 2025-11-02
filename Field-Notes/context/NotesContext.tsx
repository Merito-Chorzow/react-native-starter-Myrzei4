import React, { createContext, useContext, useState } from "react";

type Note = { id: string; title: string; desc: string };
type NotesContextType = {
  notes: Note[];
  addNote: (title: string, desc: string) => void;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, desc: string) => {
    setNotes(prev => [...prev, { id: Date.now().toString(), title, desc }]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
};