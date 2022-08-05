<template>
<div>二维码登录</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        const _router = useRouter();
        const onSubmit = () => {
            _router.push('/home')
        };
        return {
        }
    }
})
</script>

<style scoped lang="scss">
</style>