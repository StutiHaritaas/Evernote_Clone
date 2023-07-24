import React from 'react';
import './NotesList.scss';

const NotesList = ()=>
{
    return(
       <div className='Notes-List'>
          <div className='Notes-List-header'>
              <div className='title'>
               <h1>All Notes</h1>
              </div>
              <div className='sub-title'>
                  2 notes
              </div>
          </div>
          <div className='Notes-List-body'>
                
                  <div className='card'>
                 <div className='card-head'>
                    <div className='card-title'> 
                       Untitled                     
                    </div>

                    <div className='card-desc'> 
                       Some desc
                    </div>
                 </div>
              </div>
                

                 
          </div>
       </div>
    )
}

export default NotesList;