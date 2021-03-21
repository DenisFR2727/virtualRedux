/* 
 You need node 6.9 or later. 
 Run with:
 node redux-mini.js --harmony

 Want a more in depth explanation of how things works? Read the blog post I have written about it here:
 http://blog.jakoblind.no/2017/03/13/learn-redux-by-coding-a-mini-redux/
*/

/* 
 Mini Redux implementation
*/
console.log(123)
function createStore(reducer, initialState) {
    var currentReducer = reducer;
    var currentState = initialState;
    var listener = () => {};

    return {
        dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener()
            return action;
        },
        subscribe(newListener) {
            listener = newListener;
        },
        getState() {
            return currentState;
        }
    };
}

/*
 Example usage of our Mini Redux. 
 Copy pasted from the Redux official github page: https://github.com/reactjs/redux#the-gist
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
