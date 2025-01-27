<script lang="ts" setup>
import { watch } from 'vue'

// Определяем props
const props = defineProps({
  entities: {
    type: Array<{ name: string; id: number }>,
    required: true,
  },
})

watch(props.entities, () => {
  console.log(props.entities)
})
</script>

<template>
  <h2 class="entity-title">Список запросов</h2>
  <ul class="entity">
    <li v-for="entity in entities" v-bind:key="entity.id" class="entity__item">
      <h3 class="entity__name">{{ entity.name }}</h3>
      <p class="entity__id">id: {{ entity.id }}</p>
    </li>
  </ul>
</template>

<style scoped>
.entity-title {
  margin-bottom: 10px;
}
.entity {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;

  font-size: 14px;
  color: #333;
  list-style: none;

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

.entity__item {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.entity__name {
  font-size: 16px;
  font-weight: bold;
}

.entity__id {
  color: #666;
  font-size: 14px;
}
</style>
