<template>
  <p>Not Found</p>
  <a @click="$router.go(-1)">Go Back</a>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

p {
  font-size: 42px;
  text-align: center;
  margin-top: 20vh;
}

a {
  font-size: 24px;
  text-align: center;
  display: block;
  margin-top: 24px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
