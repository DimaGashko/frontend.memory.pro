import {
  processRequestError,
  removeAuthHeader
} from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async randWords(_, number) {
    try {
      return await this.$axios.$get(`/rand/words/${number}`, {
        transformRequest: [removeAuthHeader]
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async randImages(_, number) {
    try {
      return await this.$axios.$get(`/rand/images/${number}`, {
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
