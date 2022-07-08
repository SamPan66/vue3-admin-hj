<template>
    <div class="account-box">
        <el-form ref="accFormRef" :model="accForm" label-width="40px">
            <el-form-item label="账号">
                <el-input v-model="accForm.account" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="accForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="onCancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'

export default defineComponent({
    setup() {
        const _router = useRouter();
        const accFormRef = ref();
        const accForm = reactive({
            account: null,
            password: null
        })
        const onSubmit = () => {
            console.log(accForm)
            //_router.push('/home')
        }
        const onCancel = () => {
            console.log(accFormRef);
            if (!accFormRef) return;

            //accFormRef.resetFields()
        }
        return {
            accForm,
            accFormRef,
            onSubmit,
            onCancel
        }
    }
})
</script>

<style scoped lang="scss">
.account-box {
    padding: 5px 20px;
}
</style>