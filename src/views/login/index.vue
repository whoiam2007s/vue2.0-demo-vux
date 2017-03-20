<template>
    <div v-title="'Login'" class="container login text-center">
        <div class="login-logo">
            <img src="../../assets/images/common/logo_1.png" />
        </div>
        <div class="login-input" :class="{'input-show':login_btn_sta!=0}">
            <input type="text" v-model.trim="username" placeholder="Username" />
            <input type="password" v-model.trim="password" placeholder="Password" />
        </div>
        <div class="login-btn" :class="'login-sta-'+login_btn_sta" @click="onLoginClick">
            <i class="iconfont icon-jiantou"></i>
        </div>

        <div class="login-share text-center">
            <div class="inline-row">
                <i class="item iconfont icon-weixin"></i>
                <i class="item iconfont icon-qq"></i>
            </div>
            <div>
                Don't have an account?
                <span>Sign up</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                login_btn_sta:0,
            }
        },
        methods: {
            onLoginClick(){
                this.login_btn_sta == 1 && this.loginEvent();
                this.login_btn_sta == 0 && this.showInput();
            },
            showInput(){
                this.login_btn_sta++;
            },
            loginEvent(){
                this.login_btn_sta++;
                console.log('login start');
                setTimeout(()=>{
                    console.log('login success')
                    this.login_btn_sta++;
                    this.$router.push('exercise');
                }, 2000)
            }
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/theme.less';
    @keyframes login-shadow {
        0%{
            transform: scale3d(1,1,1);
            opacity: 1;
        }
        100%{
            transform: scale3d(2,2,2);
            opacity: 0;
        }
    }
    @keyframes login-circle {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .login{
        padding: 0 1.5rem;
        background: url(../../assets/images/login/bg.jpg) no-repeat;
        background-size: 100% 100%;
        .login-logo img{
            padding-top: 3rem;
            width: 4rem;
        }
        .login-input {
            height: 2rem;
            transition: height .5s;
            input {
                height:0;
                opacity: 0;
                border: 0;
                border-bottom: 1px solid @colorThr;
                color: #fff;
                width: 100%;
                background: transparent;
                text-align: center;
                font-size: .5rem;
                line-height: 2;
                margin-top: 1rem;
                animation: login-input 1s ease both;
                transition: height .5s, opacity .5s;
                &:focus {
                    border: 0;
                    border-bottom: 1px solid @colorMain;
                }
                &::-webkit-input-placehodler {
                    color: #fff;
                }
            }
            &.input-show {
                height: 4rem;
                input {
                    height:1rem;
                    opacity: 1;
                    display: block;
                }
            }
        }
        .login-btn{
            position: relative;
            display: inline-block;
            margin-top: 2rem;
            color: #fff;
            i{
                position: relative;
                font-size: .6rem;
                line-height:1rem;
                width:1rem;
                display: inline-block;
                border-radius: 50%;
                padding: .3rem;
                background: @colorMain;
                z-index: 1;
            }
            &.login-sta-0::before{
                content: '';
                position: absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                background: @colorMain;
                border-radius: 50%;
                opacity: .5;
                animation: login-shadow 1.5s ease .5s infinite;
            }
            &.login-sta-0::after{
                content: '';
                position: absolute;
                left:10%;
                top:10%;
                width:80%;
                height:80%;
                background: @colorMain;
                border-radius: 50%;
                opacity: .5;
                animation: login-shadow 1.5s ease .5s infinite;
            }
            &.login-sta-2::before{
                 content: '';
                 position: absolute;
                 left:0;
                 top:0;
                 width:1.4rem;
                 height:1.4rem;
                 border: .1rem dashed transparent;
                 border-top-color: #fff;
                 border-radius: 50%;
                 z-index: 2;
                 animation: login-circle .5s linear infinite;
            }
        }
        .login-share{
            position: absolute;
            left: 0;
            bottom: 1rem;
            width: 100%;
            color: #fff;
            .item{
                display: inline-block;
                width: 1.6rem;
                margin: 1rem;
                line-height: 1.6rem;
                font-size: 1rem;
                border-radius:50%;
                &.icon-weixin{
                     background: #f67464;
                 }
                &.icon-qq{
                     background: #566ff0;
                 }
            }
            span{
                color: @colorMain;
            }
        }
    }
</style>
