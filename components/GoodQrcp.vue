<!-- components/MatrixAnimation.vue -->
<template>
    <div class="matrix">
      <transition-group name="cell" tag="div" class="matrix-grid">
        <div
          v-for="(row, i) in matrix"
          :key="i"
          class="matrix-row"
        >
          <div
            v-for="(cell, j) in row"
            :key="`${i}-${j}-${cell}`"
            class="matrix-cell"
          >
            {{ cell }}
          </div>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue'
  
  const props = defineProps({
    steps: {
      type: Number,
      required: true
    }
  })
  
  const matrices = [
  [
    [ 1,  2,  0,  3,  4],
    [ 2,  4,  1,  7,  9],
    [ 3,  6,  1, 10, 13],
    [ 4,  8,  2, 13, 17],
    [ 5, 10,  2, 16, 21]
  ],
  [
    [ 4,  2,  0,  3,  1],
    [ 9,  4,  1,  7,  2],
    [13,  6,  1, 10,  3],
    [17,  8,  2, 13,  4],
    [21, 10,  2, 16,  5]// swapped row
  ],
  [
    [-3.1559468e+01, -1.4829147e+01, -3.1052490e+00, -2.4144894e+01, -7.4145740e+00],
    [ 0.0000000e+00, -2.5940900e-01,  2.1407000e-01,  1.2970500e-01, -1.2970500e-01],
    [ 0.0000000e+00, -1.5248000e-01, -1.3523200e-01,  7.6240000e-02, -7.6240000e-02],
    [ 0.0000000e+00, -4.5551000e-02,  5.1546600e-01,  2.2775000e-02, -2.2775000e-02],
    [ 0.0000000e+00,  6.1378000e-02,  1.6616400e-01, -3.0689000e-02,  3.0689000e-02] // value changed- 1st householders
  ],
  [
    [-3.1559468e+01, -3.1052490e+00, -1.4829147e+01, -2.4144894e+01, -7.4145740e+00],
    [ 0.0000000e+00,  2.1407000e-01, -2.5940900e-01,  1.2970500e-01, -1.2970500e-01],
    [ 0.0000000e+00, -1.3523200e-01, -1.5248000e-01,  7.6240000e-02, -7.6240000e-02],
    [ 0.0000000e+00,  5.1546600e-01, -4.5551000e-02,  2.2775000e-02, -2.2775000e-02],
    [ 0.0000000e+00,  1.6616400e-01,  6.1378000e-02, -3.0689000e-02,  3.0689000e-02] //swapped rows
  ],
  [
    [-31.559468,  -3.105249, -14.829147, -24.144894,  -7.414574],
    [  0,        -0.597854,   0.08061,   -0.040305,   0.040305],
    [  0,         0,        -0.209113,   0.104556,  -0.104556],
    [  0,         0,         0.170317,  -0.085158,   0.085158],
    [  0,         0,         0.130965,  -0.065482,   0.065482] // 2nd householder
  ],
  [
    [-31.559468,  -3.105249, -14.829147, -24.144894,  -7.414574],
    [  0,        -0.597854,   0.08061,   -0.040305,   0.040305],
    [  0,         0,         0.299813, -0.149906,   0.149906],
    [  0,         0,         0,         0,         0      ],
    [  0,         0,         0,        -0,         0      ] //3rd householders
  ]
  ]
  
  const matrix = computed(() => matrices[props.steps] || matrices[0])
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
    color:black
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
  