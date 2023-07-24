
import React from 'react';
// import { useState } from 'react';
import SideNav from './components/SideNav/SideNav';
import NotesList from './components/NotesList/NotesList';
import Notes from './components/Notes/Notes';
import './Clone.scss';

function Clone() {

  // const [notes, setNotes]= useState([]);

  // const onAddNote =()=>{
  //   console.log("add");
  // };

  return (
    <div className="Clone">
     <SideNav />
     <NotesList /> 
     <Notes/>
    </div>
  );
}

export default Clone;
