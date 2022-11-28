import { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestAllCharacter } from '../../store/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { dispatch, project } = props;

  useEffect(() => {
    dispatch(requestAllCharacter());
  }, [dispatch]);

  return (
    <div>
      {project?.characterList?.results?.map((char) => (
        <span key={char.id}>{char.name}</span>
      ))}
    </div>
  );
});

export default Home;
