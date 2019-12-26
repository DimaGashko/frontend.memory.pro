import {
  processRequestError,
  removeAuthHeader
} from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async userWordsResults(_, userId) {
    try {
      return await this.$axios.$post(`/words/rand/${number}`, {
        transformRequest: [removeAuthHeader],
        body: {
          user_id: userId
        }
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async randImages(_, number) {
    try {
      return await this.$axios.$get(`/images/rand/${number}`, {
        transformRequest: [removeAuthHeader]
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  randNumbers(_, number) {
    return new Array(number).fill(0).map(() => {
      return Math.round(Math.random() * 9);
    });
  }
};
