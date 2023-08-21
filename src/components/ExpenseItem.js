import "./ExpenseItem.css";

// function ExpenseItem() {
//   const LocationOfExpenditure = ["Food","Petrol","Movies"]; 

//   return (
//     <div>
//       <div className="expense-item">
//         <h2>Food</h2>
//         <div className="expense-item_price">10</div>
//         <div className="expense-item_location">{LocationOfExpenditure[0]}</div>
//       </div>
//       <div className="expense-item">
//         <h2>Petrol</h2>
//         <div className="expense-item_price">100</div>
//         <div className="expense-item_location">{LocationOfExpenditure[1]}</div>
//       </div>
//       <div className="expense-item">
//         <h2>Movies</h2>
//         <div className="expense-item_price">200</div>
//         <div className="expense-item_location">{LocationOfExpenditure[2]}</div>
//       </div>
//     </div>
//   );
// }



////*Passing Data*////

function ExpenseItem(props){

  return(
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
        <div>{props.locationofExpenditure}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
