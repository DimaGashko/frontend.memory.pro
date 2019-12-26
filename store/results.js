import { processRequestError } from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async userNumbersResults(_, userId) {
    try {
      return await this.$axios.$post(`/results/numbers`, {
        user_id: userId,
        limit: 10
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async userWordsResults(_, userId) {
    try {
      return await this.$axios.$post(`/results/words`, {
        user_id: userId,
        limit: 10
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async userImagesResults(_, userId) {
    try {
      return await this.$axios.$post(`/results/images`, {
        user_id: userId,
        limit: 10
      });
    } catch (e) {
      processRequestError(e);
    }
  }
};
