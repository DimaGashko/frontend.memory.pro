import {
  processRequestError,
  removeAuthHeader
} from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async getNumbersResult(_, id) {
    try {
      return await this.$axios.$get(`/results/numbers/${id}`, {
        transformRequest: [removeAuthHeader]
      });
    } catch (e) {
      processRequestError(e);
    }
  },

  async getWordsResult(_, id) {
    try {
      return await this.$axios.$get(`/results/words/${id}`, {
        transformRequest: [removeAuthHeader]
      });
    } catch (e) {
      processRequestError(e);
    }
  },

  async getImagesResult(_, id) {
    try {
      return await this.$axios.$get(`/results/images/${id}`, {
        transformRequest: [removeAuthHeader]
      });
    } catch (e) {
      processRequestError(e);
    }
  },

  async saveNumbersResult(_, data) {
    try {
      return await this.$axios.$put(`/results/numbers`, data);
    } catch (e) {
      processRequestError(e);
    }
  },

  async saveWordsResult(_, data) {
    try {
      return await this.$axios.$put(`/results/words`, data);
    } catch (e) {
      processRequestError(e);
    }
  },

  async saveImagesResult(_, data) {
    try {
      return await this.$axios.$put(`/results/images`, data);
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
