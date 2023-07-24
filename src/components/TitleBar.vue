<template>
  <header>Shockbyte BirdHouses Admin Panel</header>
</template>

<style scoped lang="scss">
@use '@/styles/colors.scss' as c;
@use '@/styles/variables.scss' as v;
header {
  background-color: c.$secondary;
  color: c.$white;
  font-family: Inter;
  font-size: v.$font-size-title;
  text-align: center;
  padding: 25px;
  font-weight: 700;
  height: v.$header-height;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}
</style>
