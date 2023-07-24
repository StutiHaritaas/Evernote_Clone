import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faBook, faPlus, faSearch, faStar,faStickyNote,faTrash }from '@fortawesome/free-solid-svg-icons';
import './SideNav.scss';

const SideNav = () =>{

    return (
     <div className="SideNav">
        <div className="SideNav-top">
           <div className="SideNav-top-profile">
              <div className="profile-icon">
                  S
              </div>
              <div className="profile-title">
                 Stuti Haritaas
                 <FontAwesomeIcon className="icon" icon={faAngleDown}/>
              </div>
            </div>
            <div className='SideNav-top-search'>
                <div className='search-box'>
                    <FontAwesomeIcon className="icon" icon={faSearch}/>
                   <input placeholder='Search'>
                   </input>
                </div>
            </div>
            <div className='SideNav-top-createnote' >
                <div className='createnote-btn'>
                   <FontAwesomeIcon className="icon" icon={faPlus}/>
                   <div className='title' >
                      New Note
                  </div> 
                </div>

            </div>
            <div className='SideNav-top-menu-item'>
                <ul>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faStar}/>
                         Shortcuts
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faStickyNote}/>
                          Notes
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faBook}/>
                         Notebooks
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faTrash}/>
                         Trash
                    </li>
                </ul>
            </div>
        </div>     
    </div>  
    )
}
export default SideNav;