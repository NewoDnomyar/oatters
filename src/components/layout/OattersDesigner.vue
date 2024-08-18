<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar for Image Uploads -->
        <div class="col-md-3 sidebar">
          <h3>Upload Images</h3>
          <input type="file" id="upload-photo" name="file" multiple class="form-control-file mb-3">
          <h3>Uploaded Images</h3>
          <div id="uploaded-images"></div>
          <h3>Actions</h3>
          <button @click="undo" class="btn btn-info mb-2">Undo</button>
          <button @click="redo" class="btn btn-info mb-2">Redo</button>
        </div>
  
        <!-- Main Canvas Area -->
        <div class="col-md-6">
          <!-- Front Canvas -->
          <div class="canvas-container">
            <h4 class="text-center">Front Design</h4>
            <div id="rosetaCanvasFront" class="clickable-tile" @click="triggerUpload('front')">
              <input type="file" ref="imageUploadFront" style="display: none;" @change="handleImageUpload($event, 'front')">
              <img v-if="uploadedImageFront" :src="uploadedImageFront" style="max-width: 100%; max-height: 100%;">
            </div>
          </div>
          <!-- Back Canvas -->
          <div class="canvas-container">
            <h4 class="text-center">Back Design</h4>
            <div id="rosetaCanvasBack" class="clickable-tile" @click="triggerUpload('back')">
              <input type="file" ref="imageUploadBack" style="display: none;" @change="handleImageUpload($event, 'back')">
              <img v-if="uploadedImageBack" :src="uploadedImageBack" style="max-width: 100%; max-height: 100%;">
            </div>
          </div>
        </div>
  
        <!-- Toolbar -->
        <div class="col-md-3 toolbar">
          <h3>Tools</h3>
          <button class="btn btn-info mb-2">Add Text</button>
          <button class="btn btn-info mb-2">Download PDF</button>
          <button class="btn btn-info mb-2">Preview PDF</button>
          <h3>Paper Size</h3>
          <button class="btn btn-secondary mb-2">Legal Size (8.5" x 14")</button>
          <button class="btn btn-secondary mb-2">Tabloid Size (11" x 17")</button>
          <router-link to="/checkout" class="btn btn-warning">Continue to Checkout</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        uploadedImageFront: null,
        uploadedImageBack: null,
      };
    },
    methods: {
      triggerUpload(side) {
        this.$refs[`imageUpload${this.capitalize(side)}`].click();
      },
      handleImageUpload(event, side) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this[`uploadedImage${this.capitalize(side)}`] = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      undo() {
        // Implement undo logic
      },
      redo() {
        // Implement redo logic
      }
    }
  };
  </script>
  
  <style scoped>
  .clickable-tile {
    width: 100%;
    height: 600px;
    border: 2px dashed var(--accent-color);
    background-color: var(--neutral-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .clickable-tile img {
    max-width: 100%;
    max-height: 100%;
  }
  </style>
  