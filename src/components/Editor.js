function Editor(props){
  
   return (
    <div className="editor">
        <p>{props.currentNote().body}</p>
    </div>
   );
}

export default Editor;