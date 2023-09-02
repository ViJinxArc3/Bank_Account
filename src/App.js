//imported selectors and dispatch from redux
import { useSelector, useDispatch } from 'react-redux';

//import actions from Account file
import { incrementByAmount, decrementByAmount, addInterest, substractCharges } from './Store/Account';

//import useState from react
import { useState } from "react";

//CSS
import './App.css'

function App() {
  const accountBalance = useSelector(state => state.account.balance);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);

  // dispatching an action to add 5% interest to the account balance
  const handleInterest = () => {
    dispatch(addInterest()); 
  }

  // dispatching an action to subtract 15% charges from the account balance
  const handleCharges = () => {
    dispatch(substractCharges()); 
  }

  // dispatching an action to add deposit amount to the account balance as enetered in the input field
  const handleDeposit = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(Number(userInput)));
    setUserInput(0)
    };

    // dispatching an action to subtract qmount from the account balance as entered in the input field 
    const handleWithdraw = (event) => {
      event.preventDefault();
      dispatch(decrementByAmount(Number(userInput)));
      setUserInput(0)
      };

  //returned jsx
    return (
    <div className="container">
      {/* displaying the current account balance */}
      <p>Account Balance: R{accountBalance.toFixed(2)}</p>
       <div>
        {/* input field */}
        <form className="Form">
          <label>
            Value:
            <input
              type="text"
              name="value"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              />
          </label>
        </form>
        {/* Buttons to perform actions to manupilate the cash balance */}
        <div className="button-container">
          <button className="Buttons" onClick={handleWithdraw}>Withdraw</button>
           <button className="Buttons" onClick={handleDeposit}>Deposit</button>
           <button className="Buttons" onClick={handleInterest}>Add Interest</button>
           <button className="Buttons" onClick={handleCharges}>Charge</button>
        </div>
      </div>
    </div>
    );
}

export default App;
