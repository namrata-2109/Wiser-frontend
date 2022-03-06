import React from 'react';
import Cdata from './Cdata';
import './card.css';
 

function Card() {
    
    return (
        <>
            {
                Cdata.map((value) => {
                    return <>
                    <div className='container'>
                    <div className='main-card'>
                           <div className='card' style={value.csss}>
                               <div className='card-name' >
                               <h2 className='card__text'> {value.name}</h2>
                               </div>
                           </div>
                       </div>
                    </div>
                       
                                    
                                
                            
                    </>
                })
            }
        </>
    )
}

export default Card;
