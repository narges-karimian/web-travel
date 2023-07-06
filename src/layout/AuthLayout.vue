<template>
	<div class="card login">
		<div>
			<img
				src="@/assets/img/Image.png"
				alt="login form image"
				class="image" />
			<img
				src="@/assets/img/Vector.png"
				alt="background vector"
				class="image image--backgroung" />
			<div class="image__fade"></div>
		</div>
		<router-view></router-view>
	</div>
</template>

<style scoped>
.login {
	z-index: 1;
	position: relative;
}

.image {
	padding: 0 3rem;
}

.image__fade {
	position: absolute;
	right: 0%;
	bottom: 0%;
	background: linear-gradient(
		180deg,
		#ffffff 32.88%,
		rgba(255, 255, 255, 0) 246.62%
	);
	transform: matrix(1, 0, 0, -1, 0, 0);
	width: 60%;
	height: 45%;
	z-index: -1;
}

.image--backgroung {
	position: absolute;
	left: 5%;
	top: 0%;
	z-index: -1;
	opacity: 0.8;
	width: 90%;
	height: 100%;
}
</style>
