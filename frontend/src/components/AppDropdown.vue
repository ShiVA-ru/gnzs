<script lang="ts" setup>
import { useEntityStore } from '@/stores/EntityStore'
import IconArrow from './icons/IconArrow.vue'
import { ref } from 'vue'

const store = useEntityStore()
const emit = defineEmits(['select'])

defineProps({
  placeholder: {
    type: String,
    default: 'Не выбрано',
  },
})

const isOpen = ref(false)
const selectedOption = ref('')

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  if (isOpen.value) {
    isOpen.value = false
  }
}

const selectOption = (option: { name: string; route: string }) => {
  selectedOption.value = option.name
  isOpen.value = false
  emit('select', option.route)
}
</script>

<template>
  <div class="dropdown" v-click-outside="closeDropdown">
    <button
      @click="toggleDropdown"
      class="dropdown__toggle"
      :class="{ 'dropdown__toggle--active': isOpen }"
    >
      {{ selectedOption || placeholder }}
      <span class="dropdown__arrow">
        <IconArrow />
      </span>
    </button>

    <ul v-if="isOpen" class="dropdown__menu">
      <li
        v-for="option in store.entities"
        :key="option.name"
        @click="selectOption(option)"
        class="dropdown__item"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  z-index: 100;

  display: inline-block;
  min-width: 140px;
}

.dropdown__toggle {
  width: 100%;
  padding: 10px 20px;

  font-size: 14px;
  text-align: unset;

  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-right: none;
  border-radius: 5px 0 0 5px;

  cursor: pointer;
}

.dropdown__toggle--active {
  border-radius: 5px 0 0 0;

  .dropdown__arrow {
    transform: rotate(180deg);
  }
}

.dropdown__arrow {
  position: absolute;
  right: 10%;

  transition: transform 0.3s ease-in-out;
  transform-origin: center 47%;
}

.dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  padding: 0;

  font-size: 14px;
  color: var(--color-text);

  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 0 0 5px 5px;

  list-style: none;
}

.dropdown__item {
  padding: 10px 20px;

  transition: background-color 0.1s ease-in-out;

  cursor: pointer;
}

.dropdown__item:hover {
  color: var(--vt-c-white);

  background-color: var(--color-background-accent);
}
</style>
