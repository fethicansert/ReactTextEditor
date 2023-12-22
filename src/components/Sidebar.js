
function Sidebar(props){
   
    const noteElements = props.notes.map(note => {
        return (<div className="note-card" 
                 key={note.id}
                 onClick={()=> props.setCurrentNodeId(note.id)}
                 >
                {note.id}
                <button onClick={ () => props.deleteNote(note.id) }>Delete</button>
            </div>)
    });

    return (
        <div className="side-bar">
            <header>
                <h1>Notes</h1>
                <button onClick={ props.addNote }>+</button>
            </header>
            {noteElements}
        </div>
    )
}

export default Sidebar;