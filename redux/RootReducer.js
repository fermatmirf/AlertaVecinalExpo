import { combineReducers } from 'redux';
import grupoReducer from './Grupo/GrupoReducer';
import navigationReducer from './Navigation/NavigationReducer';

const rootReducer = combineReducers({
  grupoReducer
});

export default rootReducer;