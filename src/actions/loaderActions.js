import * as types from '../constants/actionTypes';

export const updateLoader = (loaded) => {
  return { type: types.UPDATE_LOADER, loaded };
}
