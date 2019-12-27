import { processRequestError } from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async saveWordsResult(_, data) {
    try {
      return await this.$axios.$put(`/results/words`, data);
    } catch (e) {
      processRequestError(e);
    }
  },

  async userNumbersResults(_, data) {
    try {
      return await this.$axios.$post(`/results/numbers`, data);
    } catch (e) {
      processRequestError(e);
    }
  },
  async userWordsResults(_, data) {
    try {
      return await this.$axios.$post(`/results/words`, data);
    } catch (e) {
      processRequestError(e);
    }
  },
  async userImagesResults(_, data) {
    try {
      return await this.$axios.$post(`/results/images`, data);
    } catch (e) {
      processRequestError(e);
    }
  }
};
