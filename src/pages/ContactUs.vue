<template>
    <div id="top">
        <Head />
        <div class="right">
            <div class="line"></div>
            <SendEmail />
            <FixedLeft msg="联系我们" />
            <div class="banner"></div>
            <div class="right_content">
                <div class="adress">
                    <h3 class="address_h2">联系我们</h3>
                    <p class="address_p">地址:上海市浦东新区明月路188弄27号</p>
                    <p class="address_p">电话: 021-65550668</p>
                    <p class="address_p">邮箱: service@newuinvest.com</p>
                </div>
                


                <div class="form_content">
                    <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                        <div class="eamil_input">
                            <el-form-item  prop="email" label="您的邮箱：">
                                <el-input v-model="formInline.email" placeholder="请填写邮箱"></el-input>
                            </el-form-item>
                        </div>
                        <div class="eamil_input">
                            <el-form-item prop="content" label="您的留言：">
                                <el-input type="textarea" :rows="5" v-model="formInline.content" placeholder="请填写内容...."></el-input>
                            </el-form-item>
                        </div>
                        <div class="email_button" @click="onSubmit('form')">发送</div>
                    </el-form> 
                </div>
               
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from './../components/Footer';
import Head from './../components/Head.vue';
import SendEmail from './../components/SendEmail';
import FixedLeft from './../components/FixedLeft';
export default {
    components:{
        Footer,
        Head,
        SendEmail,
        FixedLeft,
    },
    data() {
        var validateEmail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('邮箱不能为空'));
            }
            setTimeout(() => {
                if ( /^[A-Za-z0-9\u4e00-\u9fa5^_]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) ) {
                    callback();
                } else {
                    callback(new Error('邮箱格式不对'));
                }
            }, 1000);
        }
        return {
            formInline: {
                email: '',
                content: '',
            },
            labelPosition: "top",
            rules: {
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '内容不能为空', trigger: 'change' }
                ],
            },
            
        };
    },
    methods:{
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$Axios.post('/api/v1/contacts',{
                       ...this.formInline
                }).then((data)=>{
                    if (data.data.code == 200) {
                        this.$message({
                            message: '发送成功',
                            type: 'success'
                        });
                    }
                })
                
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
    }
}
</script>
<style lang="less" scoped>
    .right{
        position: relative;
    }
    .banner{
        background: url('./../assets/images/right_banner.png') no-repeat;
        width: 100%;
        background-size: cover;
        height: 443px;
    }
    .right_content{
        width: 40%;
        margin-left: 20%;
        padding-bottom: 140px;
        .adress{
            border-bottom: 1px solid #BFBFBF;
            padding-bottom: 40px;
            padding-top: 60px;
            .address_h2{
                font-size: 27px;
                font-family: Source Han Serif CN;
                font-weight: bold;
                color: #000000;
                margin: 0;
                margin-bottom: 35px;
            }
            .address_p{
                font-size: 18px;
                font-family: Source Han Serif CN;
                color: #333333;
                line-height: 40px;
            }
        }
        .form_content{
            width: 60%;
            background: #FFFFFF;
            box-sizing: border-box;
            margin-top: 23px;
            .eamil_input{
                margin-bottom: 19px;
            }
            .email_button{
                width: 83px;
                height: 30px;
                line-height: 30px;
                background: #C00000;
                border-radius: 4px;
                text-align: center;
                color: #FFFFFF;
                font-size: 15px;
                font-weight: 800;
                cursor: pointer;
                margin-top: 25px;
            }
            /deep/.el-form-item{
                margin-bottom: unset;
            }
            /deep/.el-input__inner{
                height: 30px;
                line-height: 30px;
            }
            /deep/.el-form-item__label{
                line-height: unset;
            }
        }
    }
</style>