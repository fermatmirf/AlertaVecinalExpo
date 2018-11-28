import actionTypes from './UsuariosConstant';

const fakeGrupos = [
  {
    nombre: "Cuadra A",
    direccion: 'Carlos Posse'
  },
  {
    nombre: "Cuadra B",
    direccion: 'Marcos Paz'
  }
];

const fetchGrupos = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_GRUPOS });

  setTimeout(() => {
    dispatch({
      type: actionTypes.FETCH_GRUPO_SUCCESS,
      payload: fakeGrupos
    });
  } ,  0000);
};

export {
  fetchGrupos
};