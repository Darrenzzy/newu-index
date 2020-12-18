<template>
    <div class="fixed_right" ref="sendEmail">
        <div>
            <!-- <el-popover
                placement="left-start"
                width="323"
                trigger="click"
                enterable="true"
                visible-arrow=false
                popper-class="email_popper"

            > -->
                <div class="email" slot="reference" @click="handleEmailClick">
                    <div class="email_box" v-show="emailFlag">
                        <div class="top">
                            诺游以客户为先，我们非常希望能帮助到您，欢迎留下联系方式及询问内容，我们会在1-3个工作天内回复，谢谢
                        </div>
                        <div class="form_content">
                            <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                                <div class="eamil_input">
                                    <el-form-item  prop="email">
                                        <el-input v-model="formInline.email" placeholder="请填写邮箱"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="eamil_input">
                                    <el-form-item prop="content">
                                        <el-input type="textarea" :rows="2" v-model="formInline.content" placeholder="请填写内容...."></el-input>
                                    </el-form-item>
                                </div>
                                <div class="email_button" @click="onSubmit('form')">发送</div>
                            </el-form> 
                        </div>
                    </div>
                </div> 
            <!-- </el-popover> -->
        </div>
        <div>
            <!-- <el-popover
                placement="top-start"
                width="150"
                trigger="click"
                enterable="true"
                popper-class="barcode_popper"
            > -->
                
                <div class="bar_code" slot="reference" @click="handleBcrCodeClick">

                    <div class="code_box" v-show="barCodeFlag">
                        <img src="./../assets/images/er_wei_ma.jpg"/>
                    </div>


                </div>
            <!-- </el-popover> -->
        </div>
        <div class="back_top" @click="backTop" ></div>
    </div>
</template>
<script>
export default {
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
            startHeight: document.documentElement.scrollTop || document.body.scrollTop,
            activeIndex: 0,
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
            emailFlag: false,
            barCodeFlag: false,
            
        };
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
            if(this.$refs.sendEmail){
                if (scrollHeight > 1000) {
                    this.$refs.sendEmail.style.opacity = 1;
                    this.$refs.sendEmail.style.display = "block";
                } else{
                    this.$refs.sendEmail.style.opacity = 0;
                    this.$refs.sendEmail.style.display = "none";
                }
            }
        })
    },
    methods:{
        backTop(){
           let top = document.documentElement.scrollTop || document.body.scrollTop
            // 实现滚动效果
            const timeTop = setInterval(() => {
            document.body.scrollTop = document.documentElement.scrollTop = top -= 50
            if (top <= 0) {
                clearInterval(timeTop)
            }
            }, 10)
        },
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
        handleEmailClick(){
            let flag = !this.emailFlag;
            this.emailFlag = flag;
            if (this.emailFlag) {
                this.barCodeFlag = false;
            }
        },
        handleBcrCodeClick(){
            let flag = !this.barCodeFlag;
            this.barCodeFlag = flag;
            if (this.barCodeFlag) {
                this.emailFlag = false;
            }
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>
<style  lang="less">
    .fixed_right{
        width: 47px;
        position: fixed;
        right: 10%;
        top: 60%;
        z-index: 10;
        opacity: 0;
        display: none;
        transition: opacity 1s ease;
        .email, .bar_code, .back_top{
            width: 100%;
            height: 45px;
            cursor: pointer;
            margin-bottom: 2px;
        }
        .email{
            background: url("./../assets/images/email.png");
            background-size: cover;
            position: relative;
        }
        .bar_code{
            background: url("./../assets/images/bar_code.png");
            background-size: cover;
            position: relative;
        } 
        .back_top{
            background: url("./../assets/images/back_top.png");
            background-size: cover;
        }
    }
   
    .test[x-placement^=left] .popper__arrow::after{
        border-left-color: #C00000;

    }
    .email_box{
        position: absolute;
        right: 60px;
        top: 50%;
        transform: translateY(-50%);
        width: 323px;
        background: #C00000;
        border-radius: 5px;
        padding: 14px 14px;
        box-sizing: border-box;
        &::after{
            content: "";
            display: block;
            border: 10px transparent solid;
            border-left-color: #C00000;
            position: absolute;
            right: -19px;
            top: 50%;
            transform: translateY(-50%);
        }
        .top{
            width: 100%;
            font-size: 14px;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 21px;
        }
        .form_content{
            width: 100%;
            background: #FFFFFF;
            padding: 15px;
            box-sizing: border-box;
            margin-top: 23px;
            .eamil_input{
                margin-bottom: 19px;
            }
            .email_button{
                width: 83px;
                height: 26px;
                background: #C00000;
                border-radius: 4px;
                text-align: center;
                line-height: 26px;
                color: #FFFFFF;
                font-size: 15px;
                font-weight: 800;
                cursor: pointer;
            }
            /deep/.el-form-item{
                margin-bottom: unset;
            }
            /deep/.el-input__inner{
                height: 30px;
                line-height: 30px;
            }
        }
    }
    .code_box{
        position: absolute;
        width: 150px; 
        height: 150px;
        border: 10px solid #C00000;
        border-radius: 5px;
        right: 60px;
        top: 50%;
        transform: translateY(-50%);
        &::after{
            content: "";
            display: block;
            border: 10px transparent solid;
            border-left-color: #C00000;
            position: absolute;
            right: -29px;
            top: 50%;
            transform: translateY(-50%);
        }
        img{
            width: 100%;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 414px){
       
       
    }
    
</style>