<template>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
    <component :is="Component" />
  </transition>
  </router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserAuthStore } from '@/stores/Authentication';

const store = useUserAuthStore();

onMounted(() => {
  store.autoLogin();
});
</script>

<style>
@import "@/assets/css/main.css";

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>