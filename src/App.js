import './App.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import MySplit from './components/MySplit';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

function App() {

  const [notes,setNotes] = useState(
      (localStorage.getItem('notes') && JSON.parse(localStorage.getItem('notes'))) || []
   ); 

   const [currenNoteId, setCurrentNoteId] = useState(
    notes[0] && notes[0].id || ''
   );

   useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
   },[notes]);

   function createNewNote(){
    const newNote = {
      id: notes.length + 1,
      body: `Body Text ${notes.length + 1}`
    }

    setNotes(prevNotes => [newNote,...prevNotes]);
    setCurrentNoteId(newNote.id);
   }

   function deleteNode(id){
  
      setNotes(prevNotes => {
        return prevNotes.filter(notes => notes.id !== id);
      })
   }

   function setCurrentNode(){
    return notes.find((note) => note.id === currenNoteId) || notes[0];
   }
   
  return (
    <div className="App">
      {notes.length > 0 ? (
        <MySplit>
          <Sidebar 
            notes={ notes } 
            addNote = { createNewNote }
            deleteNote = { deleteNode }  
            setCurrentNodeId = { setCurrentNoteId } 
          />
          <Editor currentNote = { setCurrentNode }/>
        
        </MySplit>
        )
        : <div>
          <p>You have no Notes</p>
          <button onClick={ createNewNote }>Add new Notes</button>
        </div>
        }
    </div>
  );
}




export default App;
