<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as v;
@use '@/styles/colors.scss' as c;
.loader {
  border: 16px solid c.$secondary;
  border-top: 16px solid c.$primary;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
