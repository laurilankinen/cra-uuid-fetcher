import { connect } from 'react-redux';
import { login, fetchApiData } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: credentials => {
      dispatch(login(credentials)).then(() => {
        dispatch(fetchApiData());
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);