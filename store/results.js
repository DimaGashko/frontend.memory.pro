import { processRequestError } from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async userNumbersResults(_, userId, limit) {
    try {
      return await this.$axios.$post(`/results/numbers`, {
        user_id: userId,
        limit
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async userWordsResults(_, userId, limit) {
    try {
      return await this.$axios.$post(`/results/words`, {
        user_id: userId,
        limit
      });
    } catch (e) {
      processRequestError(e);
    }
  },
  async userImagesResults(_, userId, limit) {
    try {
      return await this.$axios.$post(`/results/images`, {
        user_id: userId,
        limit
      });
    } catch (e) {
      processRequestError(e);
    }
  }
};
