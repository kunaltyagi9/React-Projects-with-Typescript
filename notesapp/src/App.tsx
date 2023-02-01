import React, { useState } from 'react';

import { NoteObject } from './models/note';

// components
import Header from './components/Header';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

import { Box } from '@mui/material';

function App() {

  const [notes, setNotes] = useState<NoteObject[]>([]);
  
  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes); 
  }

  const addNote = (note: NoteObject) => {
    setNotes([ note, ...notes ]);
  }
  
  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNote={addNote} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </>
  );
}

export default App;
