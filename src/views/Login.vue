<template>
    <div class="login">
        <h3>用户登录</h3>
        <p>
            <Input prefix="ios-contact" v-model="username" placeholder="请输入username" class="input" />
        </p>
        <p>
            <Input prefix="ios-lock" v-model="password" type="password" placeholder="请输入password" class="input" />
        </p>
        <p><Checkbox v-model="save">登录名和密码保留一周</Checkbox></p>
        <p>
            <Button type="primary" class="btn" @click="doLogin()">登录</Button>
            <Button type="primary" class="btn" to="/register">注册</Button>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Login",
        data(){
            return {
                username:'',
                password:'',
                save:false
            }
        },
        methods:{
            doLogin(){
                axios.post('http://localhost:8080/api/login',{username:this.username,password:this.password})
                    .then((res)=>{
                        if (res.data) {
                            if (this.save) {
                                this.$cookies.set('username',this.username,'7d');
                            }
                            this.$store.commit('setLoginUser',this.username);
                            this.$router.push('/productlist');
                        }

                        else{
                            alert('用户名或密码错误，请重新输入');
                            this.username = '';
                            this.password = '';
                        }

                    })
            }
        }
    }
</script>

<style scoped>
    .login{width:400px; margin:30px auto; border:1px solid #2d8cf0; padding:20px 5px 10px 30px; border-radius:5px; text-align:left;}
    h3{ margin-bottom: 20px}
    p{ margin-bottom: 10px}
    .input{ width: 240px}
    .btn{ margin: 0px 10px; width: 100px}
</style>