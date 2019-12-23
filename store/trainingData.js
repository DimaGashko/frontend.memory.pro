import { processRequestError } from '~/assets/scripts/utils/base.ts';

export const state = () => ({});

export const actions = {
  async randWords({ $auth }, number) {
    try {
      return await this.$axios.$get(`/words/rand/${number}`, {
        transformRequest: [
          (data, headers) => {
            delete headers.common.Authorization;
            return data;
          }
        ]
      });
    } catch (e) {
      throw processRequestError(e);
    }
  }
};
