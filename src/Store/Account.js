import { createSlice } from '@reduxjs/toolkit';


export const accountSlice = createSlice({
    // name of slice
  name: 'account',

  //number used to for our slice of state
  initialState: {
    balance: 0,
  },

  //reducer used to manipulate the initial state of current state.
  reducers: {
    // amount incrementer assigned which is set to zero in initial state.
    // to add to our account balance
    incrementByAmount: (state, action) => {
        state.balance += action.payload;
      },

    // amount decrementer assigned which is set to zero in initial state.
    // to decrement from our account balance
    decrementByAmount: (state, action) => {
        state.balance -= action.payload;
      },
    
    // amount incrementer assigned which is set to zero in initial state.
    // to increment 5% from our account balance
    addInterest: (state) => {
        state.balance *= 1.05; // initial amount (100%) + the interest (5%) = decimal at 1.05%
      }, 

    // amount decrementer assigned which is set to zero in initial state.
    // to decrement 15% from our account balance
    substractCharges: (state) => {
        state.balance *= 0.85; // initial amount (100%) - the charge (15%) = decimal at 0.85%
      },
  },
});

//actions exported
export const { incrementByAmount, decrementByAmount, addInterest, substractCharges } = accountSlice.actions;

export default accountSlice.reducer;
