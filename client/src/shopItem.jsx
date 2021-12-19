import React, { useEffect, useState } from "react";
import logo from './bounce.svg'
import './shopItem.css'

function ShopItem(props) {
    // const [amount, setAmount] = useState(0);
    const { amount } = props;

    // useEffect(() => {
    //     if(!amount){
    //         return;
    //     }
    //     // setAmount(props.amount);
    //     console.log("amount in item: ", amount);
    // },[amount]);

    return (
        <div>
            <img src={logo} className="item-image" alt="item" />
            {amount && <p>Price: $<span>{amount}</span></p>}
        </div>
    );
}

export default ShopItem;
