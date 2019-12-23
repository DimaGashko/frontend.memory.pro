export const state = () => ({});

export const actions = {
  async randWords({ $auth }, number) {
    try {
      return await this.$axios.$get(`/words/ran/${number}`, {
        transformRequest: [
          (data, headers) => {
            delete headers.common.Authorization;
            return data;
          }
        ]
      });
    } catch (e) {
      // commit('actions_err', e.response.data.message);
      throw e;
    }
  }
};
