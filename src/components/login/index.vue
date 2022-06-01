<template>
  <div class="example">{{ msg }}</div>
  <el-button type="primary" @click="onSubmit">Primary</el-button>
   
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
let msg = "login page!"
const onSubmit = ()=>{
  router.push('/home')
}
</script>

<style>
</style>