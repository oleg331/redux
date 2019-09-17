

export default function createStore(reducer, initState = {}) {
    let state = initState;
​
	function dispatch(action) {
		state = reducer(state, action);
    }

    function subscribe(listener) {
        /** ... */
    }
    
    function getState() {
        return state;
    }
​
    return { dispatch, subscribe, getState };
}
