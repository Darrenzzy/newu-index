<template>
    <div class="fixed_right">
        <div>
            <el-popover
                placement="left"
                width="323"
                trigger="hover"
                enterable="true"
                visible-arrow=false
                popper-class="test"
            >
                <div class="email_box">
                    <div class="top">
                        诺游以客户为先，我们非常希望能帮助到您，欢迎留下联系方式及询问内容，我们会在1-3个工作天内回复，谢谢
                    </div>
                    <div class="form_content">
                        <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                            <div class="eamil_input">
                                <el-input v-model="formInline.email" placeholder="请填写邮箱"></el-input>
                            </div>
                            <div class="eamil_input">
                                <el-input type="textarea" :rows="1" v-model="formInline.content" placeholder="请填写内容...."></el-input>
                            </div>
                            <div class="email_button" @click="onSubmit('form')">发送</div>
                        </el-form> 
                    </div>
                </div>
                <div class="email" slot="reference"></div>
            </el-popover>
        </div>
        <div>
                <!-- close-delay="345555" -->
            <el-popover
                placement="top-start"
                width="150"
                trigger="hover"
                enterable="true"
                popper-class="proper_code"
            >
                <div class="code_box" style="width: 150px; height: 150px; ">
                    <img src="./../assets/images/email.png" style="width: 100%"/>
                </div>
                <div class="bar_code" slot="reference"></div>
            </el-popover>
        </div>
       
        <div class="back_top" @click="backTop" ></div>

    </div>
</template>
<script>
export default {
    
    data() {
        return {
            activeIndex: 0,
            formInline: {
                email: '',
                content: '',
            },
            labelPosition: "top",
            rules: {
                email: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
            },
            
        };
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
            console.log(valid)
            if (valid) {
                console.log(this.formInline)
                alert('success!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
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
        top: 256px;
        z-index: 10;
        .email, .bar_code, .back_top{
            width: 100%;
            height: 45px;
            cursor: pointer;
            margin-bottom: 2px;
        }
        .email{
            background: url("./../assets/images/email.png");
            background-size: cover;
        }
        .bar_code{
            background: url("./../assets/images/bar_code.png");
            background-size: cover;

        } 
        .back_top{
            background: url("./../assets/images/back_top.png");
            background-size: cover;

        }
        
    }
    .test{
        border: unset;
        padding: 0;
        border-radius: 5px;
    }
    .test[x-placement^=left] .popper__arrow::after{
        border-left-color: #C00000;

    }
    .proper_code{
        padding: 5px;
    }
    .email_box{
        width: 323px;
        height: 271px;
        background: #C00000;
        border-radius: 5px;
        padding: 14px 14px;
        box-sizing: border-box;

        .top{
            width: 100%;
            font-size: 14px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 21px;
        }
        .form_content{
            width: 100%;
            height: 159px;
            background: #FFFFFF;
            padding: 15px;
            box-sizing: border-box;
            margin-top: 23px;
            .eamil_input{
                // border: 1px solid #CDCDCD;
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

            }
            /deep/.el-input__inner{
                height: 28px;
                line-height: 28px;
            }
        }
    }
    
</style>