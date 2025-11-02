import React, { createContext, useContext, useState } from "react"

type Note = {
  id: string
  title: string
  desc: string
  imageUri?: string
}

type NotesContextType = {
  notes: Note[]
  addNote: (note: Note) => void
  updateNote: (id: string, title: string, desc: string, imageUri?: string) => void
  deleteNote: (id: string) => void
}

const NotesContext = createContext<NotesContextType | undefined>(undefined)

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([
    { id: "1", title: "First Note", desc: "This is an example note.", imageUri: undefined },
    { id: "2", title: "Second Note", desc: "Another example note.", imageUri: undefined },
  ])

  const addNote = (note: Note) => {
    setNotes((prev) => [...prev, note])
  }

  const updateNote = (id: string, title: string, desc: string, imageUri?: string) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, title, desc, imageUri } : n))
    )
  }

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => {
  const ctx = useContext(NotesContext)
  if (!ctx) throw new Error("useNotes must be used within NotesProvider")
  return ctx
}