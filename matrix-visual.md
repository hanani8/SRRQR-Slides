<script setup>
import MatrixSlide from './components/MatrixSlide.vue'

const matrixSteps = [
  {
    entries: [[1, 2], [3, 4]],
  },
  {
    entries: [[1, 2], [0, -2]],
    zeroed: [{ row: 1, col: 0 }],
    highlight: [{ row: 1, col: 0 }],
  },
  {
    entries: [[1, 2], [0, 1]],
    highlight: [{ row: 1, col: 1 }],
  }
]
</script>

---

layout: center

# RRQR Matrix Animation

<MatrixSlide :steps="matrixSteps" />
