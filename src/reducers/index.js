function reducers(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.push(action.text);
        default:
            return state;
    }
}

export default reducers;