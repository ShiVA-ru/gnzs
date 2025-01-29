<script setup lang="ts">
import { ref } from 'vue'
import AppDropdown from './components/AppDropdown.vue'
import CButton from './components/CButton.vue'
import EntityInfo from './components/EntityInfo.vue'

const isSelected = ref(false)
const isLoading = ref(false)
const requestValue = ref('')
const requestList = ref<{ name: string; id: number }[]>([])

const handleSelect = (value: string) => {
  if (value) isSelected.value = true
  requestValue.value = value
}

const handleRequest = async () => {
  isLoading.value = true
  const response = await fetch('http://127.0.0.1:3000/' + requestValue.value, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    console.error('Error:', response.statusText)
    isLoading.value = false
    return
  }

  const id = await response.json()
  createAnswer(requestValue.value, id)
  isLoading.value = false
}

const createAnswer = (value: string, id: number) => {
  requestList.value.push({
    id: id,
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

    <EntityInfo :entities="requestList" />
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
