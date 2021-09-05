<template>
    <div class="login">
        <PublicBg>
            <div class="login_form">
                <h3 class="title">投资者密码恢复</h3>
                <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                    <div class="login_form_content">
                        <div class="input_box mobile_box">
                            <div class="input_mobile">
                                <el-form-item label="手机号:" prop="mobile">
                                    <el-input v-model="formInline.mobile" placeholder=""></el-input>
                                </el-form-item>
                            </div>
                            <div class="send_code">
                                <div v-if="clickFlag" class="send_code_bottom" @click="sendCode">{{currentMsg}}</div>
                                <div v-else class="send_code_bottom no_allow">{{currentMsg}}</div>
                            </div>
                        </div>
                        <div class="input_box">
                            <el-form-item label="验证码:"  prop="code">
                                <el-input v-model="formInline.code" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                            <el-form-item label="输入新密码:"  prop="password">
                                <el-input type="password" v-model="formInline.password" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                        <div class="button_box">
                            <div class="button" @click="onSubmit('form')">完成</div>
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
            var validateMobile = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                }
                setTimeout(() => {
                    if ( /^1(3|4|5|6|7|8|9)\d{9}$/.test(value) ) {
                        callback();
                    } else {
                        callback(new Error('手机号码格式不对'));
                    }
                }, 900);
            };
            return {
                currentTime: 120,
                currentMsg: "发送验证码",
                clickFlag: true,
                formInline: {
                    username: "",
                    mobile: "",
                    code: "",
                    password: "",
                    email: "",
                },
                labelPosition: "top",
                rules: {
                    mobile: [
                        { validator: validateMobile, trigger: 'change' }
                    ],
                    code: [
                        { required: true, message: '验证码不能为空', trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'change' }
                    ]
                },
                

            };
        },
        created(){
           
        },
        methods:{
            updateTime(){
                if (this.currentTime == 0) {
                    this.clickFlag = true;
                    this.currentMsg = "重新发送验证码";
                    this.currentTime = 120;
                    return;
                } else {
                    this.currentMsg = `${this.currentTime}s后重新获取`;
                    this.clickFlag = false;
                    this.currentTime -= 1;
                }   
                setTimeout(()=> {
                    this.updateTime() 
                }
                ,1000)
            },
            sendCode(){
                this.$refs.form.validateField('mobile', (phoneError) => {
                    if (!phoneError) {
                        this.updateTime();
                        this.$Axios.get('/api/v1/sendCode',{
                            params: { 'mobile': this.formInline.mobile }
                        }).then(()=>{
                            // this.$confirm('验证码已发送至登记手机号上，请查收。', {
                            //     confirmButtonText: '确定',
                            //     center: true,
                            // });
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                });
            },
            toRegister(){
                this.$router.push({path:'/register'});
            },
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                     this.$Axios.post('/api/v1/member/reset_pass',{
                       ...this.formInline
                    }).then(res=>{
                        if (res.data.code == 200) {
                            this.$message({
                                message: '修改成功,请登录',
                                type: 'success'
                            });
                            setTimeout(()=>{
                                this.$router.push({path:'/login'});
                            },1000)
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
           
        },
    }
</script>
<style scoped lang="less">
    .login{
        height: 100%;
    }
    .login_form{
        .title{
            font-size: 18px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #C00000;
            text-align: center;
            margin-bottom: 10px;
            margin-top: 50px;
        }
        .login_form_content{
            width: 270px;
            margin: 0 auto;
            .input_box{
                margin-bottom: 15px;
            }
            .mobile_box{
                display: flex;
                justify-content: space-between;
                .input_mobile{
                    width: 60%;
                }
                .send_code{
                    width: 39%;
                    .send_code_bottom{
                        background: #DFDFDF;
                        border-radius: 8px;
                        font-size: 11px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #333333;
                        height: 30px;
                        line-height: 30px;
                        margin-top: 30px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .no_allow{
                        cursor: not-allowed;
                    }
                    
                }
            }
            /deep/.el-form-item__label{
                font-size: 12px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #333333;
                padding: 0;
                line-height: 30px;
            }
            /deep/.el-input{
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
                    font-family: Source Han Serif CN;
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
                margin-top: 30px;
                cursor: pointer;
            }
            
        }
    }
</style>