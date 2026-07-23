<template>
    <div class="backgroundBox">
        <div class="loginBox">
            <div class="loginTop">
                <span class="title">欢迎使用存钱管家平台</span>
            </div>
            <div class="loginMid">
                <h3 style="color: skyblue;font-size: 25px;margin-bottom: 15px;">账号登录</h3>
                <div class="form">
                    <el-input 
                        v-model="inputAccount" 
                        class="responsive-input" 
                        placeholder="请输入账号！"
                        show-word-limit
                        maxlength="20"
                        @blur="handler('acc')"
                    >
                        <template #prefix>
                        <el-icon :size="40"><User/></el-icon>
                        <el-divider direction="vertical" class="custom-divider"/>
                        </template>
                    </el-input>
                    <span 
                    style="color: red;font-size: 12px;margin-bottom: 15px;display: inline-block;transition: all 0.3s ease;" 
                    :style="{ opacity: showAccoutMsg }">
                        请输入您的账户！
                    </span>
                    <el-input 
                        v-model="inputPassword" 
                        class="responsive-input" 
                        placeholder="请输入密码！"
                        type="password"
                        show-password
                        @blur="handler('pas')"
                    >
                        <template #prefix>
                        <el-icon :size="40"><Password/></el-icon>
                        <el-divider direction="vertical" class="custom-divider"/>
                        </template>
                    </el-input>
                    <span 
                    style="color: red;font-size: 12px;margin-bottom: 15px;display: inline-block;transition: all 0.3s ease;" 
                    :style="{ opacity: showPasswordMsg }">
                        请输入您的密码！
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang='ts' name='login'>
    import { ref } from 'vue';
    import User from '../../assets/user.svg'
    import Password from '../../assets/password.svg'

    let inputAccount = ref('')
    let inputPassword = ref('')

    let showAccoutMsg = ref(0)
    let showPasswordMsg = ref(0)

    function handler(type:string){
        if(type === 'acc'){
           showAccoutMsg.value = inputAccount.value ? 0 : 1
        }else if(type === 'pas'){
           showPasswordMsg.value = inputPassword.value ? 0 : 1
        }
    }
</script>


<style scoped>
    .backgroundBox {
        width: 100%;
        height: 100%;
        background-color: #bbfdf4;  
    }
    .loginBox {
        width: 800px;
        height: 640px;
        position: absolute;
        right: 10%;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgb(243, 243, 243);
        box-shadow: 0 2px 8px rgba(8, 8, 8, 0.16);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loginTop {
        width: 60%;
        text-align: center;
        background-color: yellow;
    }
    .title {
        margin-top: 45px;
        display: inline-block;
        font-size: 38px;
        color: rgb(24, 155, 179);
    }
    .loginMid {
        width: 60%;
        margin-top: 65px;
    }
    .responsive-input {
        height: 50px;
        box-shadow: 0 2px 8px rgba(8, 8, 8, 0.16);
        font-size: 20px;
    }
    .custom-divider {
        border-width: 2px; 
        height: 28px; 
        margin-right: 18px;
    }
</style>