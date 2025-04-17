<template>
  <div class="matrix-container">
    <h3 class="text-xl font-bold mb-4">Matrix Column Permutation Animation</h3>

    <div class="controls mb-4">
      <button @click="animatePermutation"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" :disabled="isAnimating">
        {{ isAnimating ? 'Animating...' : 'Animate Permutation' }}
      </button>
      <button @click="resetMatrix" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        :disabled="isAnimating">
        Reset
      </button>
    </div>

    <div class="permutation-display mb-4">
      <p><strong>Permutation:</strong> [{{ permutationArray.join(', ') }}]</p>
    </div>

    <div class="matrix-visualization relative">
      <div class="flex justify-center mb-8">
        <div v-for="(colIndex, i) in displayPermutation" :key="i" class="flex flex-col items-center mx-1">
          <div class="column-header bg-gray-200 px-2 py-1 mb-1 font-bold text-center w-12">
            {{ i }}
          </div>
        </div>
      </div>

      <div class="matrix-grid" :style="{ gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 1fr))` }">
        <div v-for="(cell, cellIndex) in flattenedMatrix" :key="cellIndex"
          class="matrix-cell transition-all duration-500 p-2 border border-gray-300 text-center"
          :style="{ transform: `translateX(${getColumnTransform(cellIndex)})` }">
          {{ cell }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Initial matrix (2D array)
    matrix: {
      type: Array,
      required: true,
      validator: value => value.length > 0 && value.every(row => Array.isArray(row))
    },
    // Permutation array [0, 2, 1] means: 0th column stays at 0, 2nd column goes to position 1, 1st column goes to position 2
    permutationArray: {
      type: Array,
      required: true,
      validator: value => {
        // Check if it's a valid permutation (contains all indices exactly once)
        const sorted = [...value].sort((a, b) => a - b);
        return sorted.length > 0 && sorted.every((val, idx) => val === idx);
      }
    }
  },

  data() {
    return {
      displayPermutation: [],  // Current state of permutation
      isAnimating: false,
      originalMatrix: [],
      animationStage: 0  // 0 = initial, 1 = animating, 2 = completed
    };
  },

  computed: {
    // Flatten the matrix for easier rendering based on current permutation
    flattenedMatrix() {
      const result = [];
      for (let row = 0; row < this.matrix.length; row++) {
        for (let col = 0; col < this.matrix[0].length; col++) {
          result.push(this.matrix[row][col]);
        }
      }
      return result;
    },

    // Number of columns in the matrix
    columnCount() {
      return this.matrix[0].length;
    }
  },

  methods: {
    // Calculate x-transform for each cell based on current permutation and animation stage
    getColumnTransform(cellIndex) {
      if (this.animationStage === 0) return '0px';

      const row = Math.floor(cellIndex / this.columnCount);
      const col = cellIndex % this.columnCount;

      // Find where this column should go
      const originalIndex = col;
      const newIndex = this.displayPermutation.indexOf(originalIndex);

      // Calculate the distance to move
      const distance = (newIndex - col) * 100;
      return `${distance}%`;
    },

    async animatePermutation() {
      if (this.isAnimating) return;

      this.isAnimating = true;
      this.animationStage = 1;

      // Start from identity permutation
      this.displayPermutation = Array.from({ length: this.columnCount }, (_, i) => i);

      // Wait for initial render
      await this.$nextTick();

      // Wait a moment before starting animation
      await new Promise(resolve => setTimeout(resolve, 500));

      // Apply permutation gradually
      for (let i = 0; i < this.columnCount; i++) {
        const targetCol = this.permutationArray[i];

        // Swap positions in the display permutation
        const currentIndex = this.displayPermutation.indexOf(i);
        const targetIndex = this.displayPermutation.indexOf(targetCol);

        // Skip if already in correct place
        if (currentIndex === i) continue;

        // Swap display values
        [this.displayPermutation[currentIndex], this.displayPermutation[targetIndex]] =
          [this.displayPermutation[targetIndex], this.displayPermutation[currentIndex]];

        // Let the animation run
        await new Promise(resolve => setTimeout(resolve, 700));
      }

      this.animationStage = 2;
      this.isAnimating = false;
    },

    resetMatrix() {
      this.displayPermutation = Array.from({ length: this.columnCount }, (_, i) => i);
      this.animationStage = 0;
    }
  },

  created() {
    // Initialize with identity permutation
    this.displayPermutation = Array.from({ length: this.columnCount }, (_, i) => i);
    this.originalMatrix = JSON.parse(JSON.stringify(this.matrix));
  }
};
</script>

<style scoped>
.matrix-grid {
  display: grid;
  gap: 2px;
}

.matrix-cell {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>