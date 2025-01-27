<script setup lang="ts">
import { ref } from 'vue'
import AppDropdown from './components/AppDropdown.vue'
import CButton from './components/CButton.vue'
import EntityInfo from './components/EntityInfo.vue'

const isSelected = ref(false)
const isLoading = ref(false)
const requestValue = ref('')
const answerList = ref([{ name: '', id: 0 }])

const handleSelect = (value: string) => {
  if (value) isSelected.value = true
  requestValue.value = value
}

const handleRequest = () => {
  console.log(requestValue.value)
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    createAnswer(requestValue.value)
  }, 2000)
}

const createAnswer = (value: string) => {
  answerList.value.push({
    id: 2,
    name: value,
  })
}
</script>

<template>
  <main class="page-main">
    <div class="wrapper">
      <AppDropdown placeholder="Не выбрано" @select="handleSelect" />
      <CButton :disabled="!isSelected" :isLoading="isLoading" @click="handleRequest">
        Сохранить
      </CButton>
    </div>

    <EntityInfo :entities="answerList" />
  </main>
</template>

<style scoped>
.page-main .wrapper {
  display: flex;
  align-items: stretch;
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
