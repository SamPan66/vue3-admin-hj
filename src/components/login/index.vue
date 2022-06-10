<template>
<<<<<<< HEAD
<div class="login-bg">
  <div class="example">{{ msg }}</div>
  <el-button type="primary" @click="onSubmit">Primary</el-button>
 </div>
=======
  <div class="example">{{ msg }}</div>
  <el-button type="primary" @click="onSubmit">Primary</el-button>
   
>>>>>>> master
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
let msg = "login page!"
const onSubmit = ()=>{
<<<<<<< HEAD
  console.log(router)
=======
>>>>>>> master
  router.push('/home')
}
</script>

<style>
<<<<<<< HEAD
.login-bg{ width: 100%; height: 100%; background: url(../../assets/login_bg.jpg) no-repeat top center;background-size:cover;}
=======
>>>>>>> master
</style>