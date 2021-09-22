import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    
    return (
        <div>
           <h1> I am Creating Fake Data</h1>
           
          <div className="cosmetics">
          {
               cosmetics.map(cosmetic=><Cosmetic 
                key={cosmetic._id} 
               cosmetic={cosmetic}>

               </Cosmetic>)
           }
          </div>
           
               
           
           </div>
               
        
    );
       
        };
export default Cosmetics;