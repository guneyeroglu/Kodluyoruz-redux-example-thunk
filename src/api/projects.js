import endpoints from './endpoints';
import { fetchApi } from './service';

export const getAllCharacter = async () => {
  const allResponse = await fetchApi(endpoints.character);

  return allResponse;
};

export const getAllLocation = async () => {
  const allResponse = await fetchApi(endpoints.location);

  return allResponse;
};
