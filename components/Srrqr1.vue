<!-- components/MatrixAnimation.vue -->
<template>
    <div class="matrix">
      <transition-group name="cell" tag="div" class="matrix-grid">
        <div v-for="(row, i) in matrix" :key="i" class="matrix-row">
          <div
            v-for="(cell, j) in row"
            :key="`${i}-${j}-${cell}`"
            class="matrix-cell"
            :class="{ 'highlight-cell': isHighlighted(i, j) }"
          >
            {{ cell }}
          </div>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    steps: {
      type: Number,
      required: true
    },
    highlights: {
      type: Array,
      required: false,
      default: () => []
    }
  })
  
  // Sample matrix transformations
  const matrices = [
    [
      [1, 2, 0, 3, 4],
      [2, 4, 1, 7, 9],
      [3, 6, 1, 10, 13],
      [4, 8, 2, 13, 17],
      [5, 10, 2, 16, 21]
    ],
    [
      [-7.416198, -14.832397, -3.101319, -24.136355, -31.552554],
      [0, -0, -0.105482, 0.327098, 0.327098],
      [0, 0, -0.608845, -0.295572, -0.295572],
      [0, 0, 0, 0.491943, 0.491943],
      [0, 0, 0, 0, -0],
    ],
    [
      [-24.136355, -14.832397, -3.101319, -7.416198, -31.552554],
      [0.327098, -0, -0.105482, 0, 0.327098],
      [-0.295572, 0, -0.608845, 0, -0.295572],
      [0.491943, 0, 0, 0, 0.491943],
      [0, 0, 0, 0, -0],
    ],
    [
      [24.145393, 14.826845, 3.106183, 7.413423, 31.558815],
      [0, 0.40579, -0.135263, 0.202895, 0.202895],
      [0, 0, 0.57735, -0, -0],
      [0, 0, 0, -0, 0],
      [0, 0, 0, 0, -0]
    ]
  ]
  
  const matrix = computed(() => matrices[props.steps] || matrices[0])
  
  const isHighlighted = (i, j) => {
    const currentHighlights = props.highlights[props.steps] || []
    return currentHighlights.some(([x, y]) => x === i && y === j)
  }
  </script>
  
  <style scoped>
  .matrix {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .matrix-grid {
    display: flex;
    flex-direction: column;
  }
  .matrix-row {
    display: flex;
  }
  .matrix-cell {
    width: 120px;
    height: 60px;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: beige;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-size: 18px;
    color: black;
  }
  .highlight-cell {
    background: gold;
    font-weight: bold;
    border: 2px solid orange;
    color: black;
  }
  .cell-enter-active,
  .cell-leave-active {
    transition: all 0.5s ease;
  }
  .cell-enter-from,
  .cell-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
  </style>
  
  