<template>
    <div class="camera-component">
      <video ref="video" autoplay playsinline></video>
      <canvas ref="canvas" class="hidden"></canvas>
      
      <div class="controls">
        <button @click="startCamera">Start Camera</button><br>
        <button @click="takePhoto">Take Photo</button>
      </div>
  
      <div v-if="photo">
        <h3>Captured Photo:</h3>
        <img :src="photo" alt="Captured" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const video = ref(null)
  const canvas = ref(null)
  const photo = ref(null)
  let stream = null
  
  const startCamera = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true })
      video.value.srcObject = stream
    } catch (error) {
      console.error("Error accessing camera:", error)
    }
  }
  
  const takePhoto = () => {
    const context = canvas.value.getContext('2d')
    canvas.value.width = video.value.videoWidth
    canvas.value.height = video.value.videoHeight
    context.drawImage(video.value, 0, 0)
    photo.value = canvas.value.toDataURL('image/png')
  
    // Send photo to processor
    processPhoto(photo.value)
  }
  
  const processPhoto = (base64Image) => {
    // Replace this with actual API call or logic
    console.log("Processing image...", base64Image.slice(0, 100) + '...')
  }
  
  onBeforeUnmount(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
  })
  </script>
  
  <style scoped>
  .camera-component {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  video {
    width: 100%;
    max-width: 400px;
    border: 2px solid #ccc;
    border-radius: 8px;
  }
  canvas.hidden {
    display: none;
  }
  .controls {
    margin-top: 10px;
  }
  img {
    margin-top: 10px;
    max-width: 100%;
    border: 2px solid #4caf50;
    border-radius: 8px;
  }
  </style>
  