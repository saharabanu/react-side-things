import React from 'react';
import { addToDb, removeFromeDb } from '../../utilities/fackdb';

const Cosmetic = (props) => {
    console.log(props.cosmetic)
    const {company,name,address,email,eyeColor,favoriteFruit,balance,_id,isActive}=props.cosmetic;

    const handlePurchase=(id)=>{
        console.log(id)
        addToDb(id);
    }
    const handleRemove =id=>{
        removeFromeDb(id);
    }
    
    // const CosmeticReducer=(previous,current)=>previous + current.price;
    // const cosmeticTotal=Cosmetic.reduce(CosmeticReducer,0)
    return (
        <div className="cosmetic">
            <h2>Employee Name:{name} </h2>
           <h3>Company Name: {company}</h3>
           <h4>IsActive : {isActive?"true":"false"}</h4>
           <h5>Id : {_id} </h5>
           <p>Address: {address} ,Email : {email}</p>
           <p>Balance: {balance}</p>
           <p style={{color:'white'}}> EyeColor : {eyeColor} FavoriteFruit : {favoriteFruit}</p>
           {/* <h6>total{cosmeticTotal}</h6> */}
           <button onClick={()=>handlePurchase(_id)}className="button">Purchase</button>

           <button onClick={()=> handleRemove(_id)}className="button2">Remove Data</button>

           
        </div>
    );
};

export default Cosmetic;