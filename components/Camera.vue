<template>
  <div class="camera-component">
    <div class="flex-col">
      <div class="video-container">
        <video ref="video" autoplay playsinline></video>
        <!-- Overlay square frame to indicate capture area -->
        <div class="capture-square"></div>
      </div>
      <canvas ref="canvas" class="hidden"></canvas>
      <div class="controls">
        <button @click="startCamera">Start Camera</button>
        <button @click="takePhoto">Take Photo</button>
      </div>
    </div>
    <div v-if="photo" class="preview">
      <h3>Captured Photo (64x64):</h3>
      <img :src="photo" alt="Captured" class="preview-image" />
    </div>
  </div>
  <div>
    <h2 v-if="prediction">Prediction: {{ prediction }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const video = ref(null)
const canvas = ref(null)
const photo = ref(null)
const prediction = ref(null)

let stream = null

const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
        width: { ideal: 640 },
        height: { ideal: 640 }
      }
    })
    video.value.srcObject = stream
  } catch (error) {
    console.error("Error accessing camera:", error)
  }
}

const takePhoto = () => {
  if (!video.value || !canvas.value) return

  const context = canvas.value.getContext('2d')

  // Set canvas to 64x64 for the final image
  canvas.value.width = 64
  canvas.value.height = 64

  const videoElement = video.value

  // Calculate the center and size of the square crop
  const videoWidth = videoElement.videoWidth
  const videoHeight = videoElement.videoHeight
  const size = Math.min(videoWidth, videoHeight)
  const startX = (videoWidth - size) / 2
  const startY = (videoHeight - size) / 2

  // Draw the center square of the video onto the 64x64 canvas
  context.drawImage(
    videoElement,
    startX, startY, size, size,  // Source rectangle
    0, 0, 64, 64                // Destination rectangle (64x64)
  )

  photo.value = canvas.value.toDataURL('image/png')
  // Send photo to processor
  processPhoto(photo.value)
}

const processPhoto = (base64Image) => {
  fetch('http://localhost:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: base64Image })
  })
    .then(response => response.json())
    .then(data => {
      prediction.value = data.prediction
    })
    .catch(error => {
      console.error("Error processing image:", error);
    });
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
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
}

.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-container {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.capture-square {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border: 2px solid #ff0000;
  box-sizing: border-box;
}

canvas.hidden {
  display: none;
}

.controls {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.preview {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.preview-image {
  border: 2px solid #4caf50;
  border-radius: 8px;
  image-rendering: pixelated;
  /* Show pixel art style for the small image */
  width: 128px;
  /* Display at 2x size for better visibility */
  height: 128px;
}
</style>