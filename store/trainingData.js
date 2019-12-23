import {
  processRequestError,
  getRemoveAuthObj,
  removeAuthHeader
} from '~/assets/scripts/utils/base.ts';

export const state = () => ({});

export const actions = {
  async randWords(_, number) {
    try {
      return await this.$axios.$get(`/words/rand/${number}`, {
        transformRequest: [removeAuthHeader]
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async randImages(_, number) {
    try {
      return await this.$axios.$get(`/images/rand/${number}`, getRemoveAuthObj);
    } catch (e) {
      processRequestError(e);
    }
  }
};
