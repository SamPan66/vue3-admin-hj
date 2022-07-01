<template>
<div>二维码登录</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
const _router = useRouter();
export default defineComponent({
    data() {
        return {
            tabsActiveName: 'account',
            accountLable: "账号密码登录",
            qrcodeLable: "二维码登录"
        }
    },
    methods: {
        onSubmit() {
            _router.push('/home')
        }
    }
})
</script>

<style scoped lang="scss">
</style>