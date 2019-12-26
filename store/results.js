import {
  processRequestError,
  removeAuthHeader
} from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async userWordsResults(_, userId) {
    try {
      return await this.$axios.$post(`/results/words`, {
        transformRequest: [removeAuthHeader],
        body: {
          user_id: userId
        }
      });
    } catch (e) {
      processRequestError(e);
    }
  }
};
