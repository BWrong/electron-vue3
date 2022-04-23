import { defineStore } from 'pinia';

export const useRootStore = defineStore('root', {
  state: () => ({}),
  getters: {},
  actions: {}
});
export const resetRootStore = useRootStore().$reset();
