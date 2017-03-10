// need node 6.9. run with:
// node redux-mini.js --harmony

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


function reducer(state, action) {
    switch(action.type) {
    case "test":
        return Object.assign({}, state, {
            testData: action.data
        })
        break;
    }
    return state;
}

const { subscribe, getState, dispatch } = createStore(reducer, {})

var unsubscribe = subscribe(() =>
  console.log(getState()))

dispatch({
    type: "test",
    data: "data from action"
})
