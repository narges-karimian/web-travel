<template>
    <div class="notFound"><!--v-if v-else-->
        <img src="@/assets/img/Empty.jpg" alt="empty page">
        <h5 class=" notFound_title">صفحه مورد نظر یافت نشد!!</h5>
        <p class="body_2">برای ورود به <router-link :to="{ name: 'home' }">خانه</router-link> کلیک کنید</p>
    </div>
</template>

<style scoped>
.notFound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    height: 80vh;
    color: var(--color-gray-500);
}

.notFound__title {
    color: var(--color-gray-900);
}
</style>