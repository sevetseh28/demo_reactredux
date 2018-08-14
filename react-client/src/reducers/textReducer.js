const textReducer = (state = [], action) => {
    switch(action.type) {
        // case 'ADD_TEXT_REQUEST':
        //     return state.concat([action.data]);
        case 'ADD_TEXT_SUCCESS':
            return state.concat([action.data]);
        default:
            return state;
    }
};
export default textReducer;