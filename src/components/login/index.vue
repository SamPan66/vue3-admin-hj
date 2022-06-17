<template>
    <div class="login-bg">
        <div class="login-main">
            <h1>恒江科技管理系统</h1>
            <el-tabs v-model="tabsActiveName">
                <el-tab-pane :label="accountLable" name="account">
                    <Account />
                </el-tab-pane>
                <el-tab-pane :label="qrcodeLable" name="qrcode">
                    <Qrcode />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Account from '@/components/login/account.vue';
import Qrcode from '@/components/login/qrcode.vue';
import { useRouter } from 'vue-router'
const _router = useRouter();
export default defineComponent({
    components: { Account, Qrcode },
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
.login-bg {
    width: 100%;
    height: 100%;
    position: relative;
    background: url(../../assets/login_bg.jpg) no-repeat top center;
    background-size: cover;

    .login-main {
        width: 400px;
        height: 300px;
        position: absolute;
        margin: 0 auto 0 -200px;
        top: 20%;
        left: 50%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        h1 {
            font-size: 16px;
            line-height: 24px;
        }
    }
}
</style>