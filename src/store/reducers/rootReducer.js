import * as actionTypes from '../../actions'
// Margitin metodissa otetaan vaan kaikki irti ja
// linkitetään data action.Types tyylillä
// kun taas itse pidän dekonstruktoroinnista, koska mielestäni
// koodin LUKEMINEN on silloin HELPOMPAA.

const initialState = {
    todos: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return { ...state, todos: state.todos.concat({ id: new Date(), text: action.value }) };
        case actionTypes.REMOVE_TODO:
            const updateArray = state.todos.filter((item) => item.id !== action.item)
            return { ...state, todos: updateArray };
        default:
            return state;
    }
}

export default rootReducer;