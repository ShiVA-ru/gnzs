import { defineStore } from 'pinia'

export const useEntityStore = defineStore('entity', {
  state: () => ({
    entities: [
      { name: 'Сделка', route: 'leads' },
      { name: 'Контакт', route: 'contacts' },
      { name: 'Компания', route: 'companies' },
    ],
  }),
})
