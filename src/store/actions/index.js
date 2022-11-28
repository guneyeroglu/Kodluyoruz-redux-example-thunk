import * as constants from '../constants';
import * as projects from '../../api/projects';

// ? const [name, setName] = useState('')

export const requestAllCharacter = () => async (dispatch, _state) => {
  const { data, success } = await projects.getAllCharacter();

  if (success) {
    dispatch({
      type: constants.GET_CHARACTER,
      payload: data,
    });
  }
};
