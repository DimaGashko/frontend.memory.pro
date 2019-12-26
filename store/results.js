import { processRequestError } from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async userWordsResults(_, userId) {
    try {
      return await this.$axios.$post(`/results/words`, {
        user_id: userId,
        limit: 10
      });
    } catch (e) {
      processRequestError(e);
    }
  }
};
