

<template>
  <transition name="fade">
    <div class="modal">
      <div class="menu-content-modal-body">
        <div class="modal__header">
          <slot name="header"/>
          <!-- <button type="button" class="modal__close btn" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button> -->
        </div>
        <div class="modal__body">
          <slot name="body" />
        </div>
        <div class="modal__footer">
          <div class="tags-buttons-container flex space-between">
                <button @click="closeModal" class="clear-btn">Cancel</button>
                <button class="btn-primary btn" @click="search">Search</button>
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      document.querySelector("body").classList.remove("overflow-hidden");
      this.$emit("close");
    },
    search(){
      this.$emit('search')
    }
  },
  created() {
    document.querySelector("body").classList.add("overflow-hidden");
  },
};
</script>
