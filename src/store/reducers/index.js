import { INCREMENT, DECREMENT } from "../constants"


let initialState = {
    counter: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            state = {
                ...state,
                counter: state.counter + 1
            };
            break;
        case DECREMENT:
            state = {
                ...state,
                counter: state.counter - 1
            };
            break;

        default:
            break;
    }
    return state;
}
