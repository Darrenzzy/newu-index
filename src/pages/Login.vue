<template>
    <div class="login">
        <PublicBg>
            <div class="login_form">
                <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                    <div class="login_form_content">
                        <div class="input_box">
                            <el-form-item label="手机号:" prop="user">
                                <el-input v-model="formInline.mobile" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                            <el-form-item label="密码:">
                                <el-input type="password" v-model="formInline.password" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                        <div class="link_content">
                            <span class="link_style" @click="toRegister">注册</span>
                            <span class="link_border"></span>
                            <span class="link_style"  @click="forgetPassword">忘记密码</span>
                            <!-- <span class="link_border"></span> -->
                            <!-- <span class="link_style" @click="changePassword">修改密码</span> -->
                        </div>
                        <div class="button_box">
                            <div class="button" @click="onSubmit">登录</div>
                        </div>
                    </div>
                </el-form> 
            </div>
        </PublicBg>
    </div>
</template>
<script>
    import PublicBg from './../components/PublicBg'
    export default {
        components:{
            PublicBg,
        },
        data() {
            return {
                activeIndex: 0,
                formInline: {
                    mobile: "",
                    password: "",
                },
                labelPosition: "top",
                rules: {
                    mobile: [
                        { required: true, message: '手机号不能为空', trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'change' }
                    ],
                }
            };
        },
        methods:{
            toRegister(){
                this.$router.push({path:'/register'});
            },
            forgetPassword(){
                this.$router.push({path:'/forgetPwd'});
            },
            changePassword(){
                this.$router.push({path:'/updatePwd'});
            },
            onSubmit(){
                this.$Axios.post('/api/v1/member/login',{
                    ...this.formInline
                }).then((res)=>{
                    if (res.data.code == 200) {
                        localStorage.setItem("username", res.data.data.username);
                        localStorage.setItem("email", res.data.data.email);
                        localStorage.setItem("mobile", res.data.data.mobile);
                        // this.$message({
                        //     message: '登录成功',
                        //     type: 'success'
                        // });
                        // setTimeout(()=>{
                            this.$router.push({path:'/userCenter'});
                        // },1000)
                    } else {
                        this.$message({
                            message: res.data.msg,
                            type: 'error',
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
    }
</script>
<style scoped lang="less">
    .login{
        height: 100%;
        .login_form{
            .login_form_content{
                width: 270px;
                margin: 0 auto;
                /deep/.el-form-item__label{
                    font-size: 12px;
                    font-weight: 800;
                    color: #333333;
                    padding: 0;
                }
                /deep/.el-input{
                    width: 270px;
                    height: 30px;
                    background: #C9C9C9;
                    border-radius: 8px;
                }
                /deep/.el-input__inner{
                    background-color: #C9C9C9;
                    height: 30px;
                    line-height: 30px;
                    border: none;
                    border-radius: 8px;

                }
                /deep/.el-form-item__content{
                    line-height: unset;
                }
                /deep/.el-form-item{
                    margin-bottom: 0;
                }
                .link_content{
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    .link_style{
                        font-size: 11px;
                        font-weight: 800;
                        color: #666666;
                        display: inline-block;
                        cursor: pointer;
                        &:hover{
                            color: #f3361f;
                        }
                    }
                    .link_border{
                        display: inline-block;
                        height: 11px;
                        border-left: 1px solid #8E8E8E;
                        margin: 0 10px;
                    }
                }
                .button_box{
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #F13A1C;
                    color: #ffffff;
                    border-radius: 8px;
                    font-size: 12px;
                    margin-top: 50px;
                    cursor: pointer;
                    margin-bottom: 45px;
                }
                
            }
        }
    }
</style>