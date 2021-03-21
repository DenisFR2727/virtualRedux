import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
   )(App);
  //  const initialState = [
  //   'Smells like spirit',
  //   'Enter Sandman'
  // ];
  // функция playlist - наш reducer
  
function playlist(state = [], action) {

  // if (action.type === 'ADD_TRACK') {
  //   console.log('ADD_TRACK')
  //   return [
  //     ...state,
  //     action.payload
  //   ];
  // }
  // if (action.type === 'INCREMENT') {
  //    console.log('Это инкримент!')
  //   return [
  //     ...state,
  //     action.payload
  //   ];
  // }
  // return state;
  switch (action.type) {
    case 'INCREMENT':
      state.push({name:'Audi'})
      console.log('hello increment')
      for(let item of state){
        console.log(item)
      }
      return state
    case 'DECREMENT':
       state.splice(0,1)
       console.log('hello decrement')
       for(let item of state){
        console.log(item)
      }
      console.log(state)
      return state
      // default если не сработал ни один из случаев
    default:
      return state
    }
}
// function reduxButton(store){
//   console.log(store)
// }
//createStore - создает хранилище и принимает управляющую функцию в нашем случае (playlist)
const store = createStore(playlist);
// console.log(store)
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    {/* <button onClick={()=>reduxButton()}>Redux</button> */}
    <App />
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
