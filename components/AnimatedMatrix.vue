<template>
    <div class="matrix-container">
      <table class="matrix">
        <tr v-for="(row, rowIndex) in displayMatrix" :key="rowIndex">
          <transition-group name="fade" tag="td" class="matrix-row">
            <td
              v-for="(cell, colIndex) in row"
              :key="`${rowIndex}-${colIndex}`"
              :class="cellClass(rowIndex, colIndex)"
            >
              {{ cell }}
            </td>
          </transition-group>
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  import { reactive, watch, toRefs } from 'vue'
  
  const props = defineProps({
    rows: Number,
    cols: Number,
    entries: Array, // 2D array
    highlighted: Array, // [{ row: 0, col: 1 }]
    swaps: Array, // [{ type: 'col', i: 1, j: 2 }]
    zeroed: Array, // [{ row: 1, col: 2 }]
    step: Number // to trigger a new animation step
  })
  
  const displayMatrix = reactive(structuredClone(props.entries))
  
  watch(() => props.step, () => {
    applyTransformations()
  })
  
  function applyTransformations() {
    if (props.swaps) {
      for (const swap of props.swaps) {
        if (swap.type === 'col') {
          for (let r = 0; r < props.rows; r++) {
            [displayMatrix[r][swap.i], displayMatrix[r][swap.j]] =
              [displayMatrix[r][swap.j], displayMatrix[r][swap.i]]
          }
        }
      }
    }
  
    if (props.zeroed) {
      for (const z of props.zeroed) {
        displayMatrix[z.row][z.col] = 0
      }
    }
  }
  
  function cellClass(row, col) {
    if (props.highlighted?.some(h => h.row === row && h.col === col)) {
      return 'highlighted'
    }
    return ''
  }
  </script>
  
  <style scoped>
  .matrix-container {
    margin: 1rem;
  }
  
  .matrix {
    border-collapse: collapse;
  }
  
  td {
    border: 1px solid #333;
    padding: 0.5em 1em;
    text-align: center;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .highlighted {
    background-color: yellow;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
  </style>
  