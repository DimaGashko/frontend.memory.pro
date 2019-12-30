import { processRequestError } from '~/assets/scripts/utils.ts';

export const state = () => ({});

export const actions = {
  async fetchUser(_, username) {
    try {
      return await this.$axios.$get(`/users/${username}`);
    } catch (e) {
      processRequestError(e);
    }
  },
  async fetchAllUsers() {
    try {
      return await this.$axios.$get(`/users`);
    } catch (e) {
      processRequestError(e);
    }
  }
};
