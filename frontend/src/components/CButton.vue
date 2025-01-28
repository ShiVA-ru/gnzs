<script lang="ts" setup>
const emit = defineEmits(['click'])

defineProps({
  disabled: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button v-if="!isLoading" class="button" :disabled="disabled" @click="emit('click')">
    <slot />
  </button>
  <div v-else class="loader"></div>
</template>

<style scoped>
.button {
  min-height: 100%;
  min-width: 120px;

  color: var(--vt-c-white);
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-left: none;
  border-radius: 0 5px 5px 0;
  background-color: var(--color-background-accent);
  cursor: pointer;
  transition:
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:disabled {
    opacity: 0.5;
    background-color: var(--vt-c-black);
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    box-shadow: 5px 5px 10px var(--vt-c-shadow-color);
  }
}

.loader {
  position: relative;
  min-height: 100%;
  width: 45px;
  border-radius: 0 5px 5px 0;
  background-color: var(--color-border);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    translate: -50% -50%;

    width: 25px;
    height: 25px;
    border: 2px solid var(--vt-c-accent-color);
    border-radius: 50%;
    opacity: 0.5;
    border-bottom-color: transparent;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    rotate: 0deg;
  }
  50% {
    rotate: 180deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
