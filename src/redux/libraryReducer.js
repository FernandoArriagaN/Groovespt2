const initialState = {
    library:[],
};

const libraryReducer = (state = initialState, action) => {

    switch(action.type) {
        case "ADD_ALBUM":
            return{
                ...state,
                library: [...state.library, action.payload],


            };
        case "REMOVE_ALBUM":
            return{
                ...state,
                library: state.library.filter(item => item.id !== action.payload)
            }

            default:
                return state;
    }
    
}


export default libraryReducer;