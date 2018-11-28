import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGrupos } from '../../redux/Grupo/GrupoActions';
import GrupoListComponent from './GrupoListComponent';

const mapStateToProps = store => ({
    arrayGrupos: store.GrupoReducer.grupos
});

const mapDispatchToProps = dispatch => ({
    gruposActions : bindActionCreators({
        fetchGrupos
    }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(GrupoListComponent);