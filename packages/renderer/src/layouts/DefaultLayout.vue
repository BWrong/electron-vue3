<template>
  <div class="frame">
    <AppMenu />
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition mode="out-in" name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import AppMenu from '@/components/AppMenu.vue';
</script>
<style lang="less" scoped>
.frame {
  width: 100vw;
  height: 100vh;
  display: flex;
  // background-color: #f8f8f9;
  position: relative;
  .content {
    // padding: 24px;
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    background: #fff;
    color: #333;
    // border-radius: 14px 0 0 14px;
  }
}
/* slide */
.slide-leave-active,
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
@media (prefers-color-scheme: dark) {
  .frame .content {
    background-color: #1E1E1F;
    color: #aaa;
  }
}
</style>
