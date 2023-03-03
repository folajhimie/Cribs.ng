<template>
  <div>
   
      
        <div class="modal-content">
          <div class="modal-header">
            <slot name="title"></slot>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      
    
  </div>
</template>

<script>
  export default {
    components: {
        "app-layout": () => import("@/components/layouts/app.vue")
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
