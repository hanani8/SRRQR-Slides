<template>
    <div>
      <AnimatedMatrix
        :rows="rows"
        :cols="cols"
        :entries="currentStep.entries"
        :highlighted="currentStep.highlight || []"
        :swaps="currentStep.swaps || []"
        :zeroed="currentStep.zeroed || []"
        :step="stepIndex"
      />
      <button @click="nextStep" :disabled="stepIndex >= steps.length - 1">
        Next
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, toRefs } from 'vue'
  import AnimatedMatrix from './AnimatedMatrix.vue'
  
  // Get steps from parent slide
  const props = defineProps({
    steps: {
      type: Array,
      required: true,
    }
  })
  
  const stepIndex = ref(0)
  const steps = props.steps
  const currentStep = computed(() => steps[stepIndex.value])
  const rows = computed(() => steps[0].entries.length)
  const cols = computed(() => steps[0].entries[0].length)
  
  function nextStep() {
    if (stepIndex.value < steps.length - 1) {
      stepIndex.value++
    }
  }
  </script>
  
  