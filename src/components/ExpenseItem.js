import React from "react";
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>27th July 2022</div>
            <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$ 50.99</div>
            </div>
            
        </div>
    );
}

export default ExpenseItem;
