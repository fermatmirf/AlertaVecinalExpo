import actionTypes from './GrupoConstant';

const initialState = {
    grupos: [],
    fetchingGrupos: false
}

const GrupoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCHING_GRUPOS: {
            return {...state, fetchingGrupos: true};
        }
        
        case actionTypes.FETCH_GRUPO_SUCCESS: {
            return {...state, grupos:action.payload, fetchingGrupos: false};
        }
        default:
            return state;
    }
}

export default GrupoReducer;