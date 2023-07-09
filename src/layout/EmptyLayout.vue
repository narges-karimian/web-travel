<template>
    <div class="page">
		<the-header></the-header>
        <slot></slot>
		<the-footer></the-footer>
    </div>
</template>

<script setup>
import TheHeader from "@/components/dashboard/TheHeader.vue";
import TheFooter from "@/components/dashboard/TheFooter.vue";
</script>

<style scoped>
.page{
    background-color: var(--color-bg-light-surface);
	width: 100%;
	height: 100vh;
}
</style>