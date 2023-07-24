import React from 'react';
import './Notes.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
const Notes = ()=>
{

    return(
        <div className='Notes'>
             <div className='Notes-header'>
                <div className='header-left'>
                    First Notebook
                </div>
                <div className='header-right'>
                    <div className='action-btn'>
                        <FontAwesomeIcon className='icon' icon={faArchive}/>
                    </div>
                </div>
             </div>
             <div className='Notes-body'>
                 <div className='body-head'>
                    <input placeholder='Title'/>
                 </div>
                 <div className='body-content'>
                    <textarea placeholder='Start Writing'/>
                 </div>
             </div>
        </div>
    )
}

export default Notes;