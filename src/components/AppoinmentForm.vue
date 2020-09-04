<template>
    <div class="appointment">
        <div class="appointment_left">
            <p class="title">专户预约</p>
            <p class="desc_one">专业人士提供个性化资产管理建议</p>
            <p class="desc_two">
                尊敬的投资者，基金专户仅面向合格投资者，您需提交合格投资者相关证明材料，感谢您的关注。
            </p>
        </div>
        <div class="appointment_right">
            <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                <div class="appointment_content">
                    <div class="input_box">
                        <el-form-item label="姓名:" prop="user">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="电话:">
                            <el-input v-model="formInline.mobile" placeholder="">电话</el-input>
                        </el-form-item>
                    </div>
                        <div class="input_box">
                            <el-form-item label="性别:" prop="sex">
                                <el-radio-group v-model="formInline.sex">
                                <el-radio label="0">先生</el-radio>
                                <el-radio label="1">女士</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    <div class="input_box">
                        <el-form-item label="电子邮件:">
                            <el-input v-model="formInline.email" placeholder="">电话</el-input>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="城市:">
                            <el-select v-model="formInline.city" placeholder="">
                            <el-option label="上海" value="shanghai"></el-option>
                            <el-option label="北京" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                            <el-form-item label="投资身份" prop="aaaaa">
                            <el-radio-group v-model="formInline.aaaaa">
                            <el-radio label="0">个人</el-radio>
                            <el-radio label="1">机构</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="验证码:" prop="code">
                            <el-input v-model="formInline.code" placeholder="">电话</el-input>
                        </el-form-item>
                    </div>
                    <div class="button_box">
                        <div class="button" @click="onSubmit('form')">提交预约</div>
                    </div>
                </div>
            </el-form> 
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: 0,
            formInline: {
                user: '',
                region: '',
                sex: "",
                aaaaa: "",
                city: "",
                email: "",
                mobile: "",
                code: ""
            },
            labelPosition: "top",
            rules: {
                user: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
            }
        };
    },
    created(){
    },
    // props: {
    //     msg: String
    // },
    methods:{
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
<style scoped lang="less">
    .appointment{
        width: 70%;
        margin-left: 15%;
        height: 255px;
        background: url("./../assets/images/appoinment_bg.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        .appointment_left{
            width: 40%;
            padding-top: 34px;
            padding-left: 32px;
            .title{
                font-size: 18px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #414141;
                margin: 0 0 27px;
            }
            .desc_one{
                font-size: 14px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #666666;
                line-height: 27px;
            }
            .desc_two{
                margin-top: 20px;
                font-size: 11px;
                font-family: Source Han Serif CN;
                font-weight: 500;
                color: #414141;
                line-height: 18px;
                width: 80%;
            }
        }
        .appointment_right{
            width: 60%;
            .appointment_content{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding-top: 10px;
                .input_box{
                    width: 30%;
                    // height: 30px;
                    // border: 1px solid;
                    .label_style{
                        font-size: 11px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #414141;
                        height: 30px;
                        line-height: 30px;
                    }
                    /deep/.el-form-item{
                        margin-bottom: unset;
                    }
                    /deep/ .el-input__inner{
                        border: unset;
                        border-radius: unset;
                        height: 27px;
                        line-height: 27px;
                        font-size: 12px;
                        font-size: 12px;
                    }
                    /deep/ .el-form-item__label{
                        line-height: unset;
                        padding: 0;
                        font-size: 12px;
                        color: #414141;
                    }
                    /deep/.el-form-item__content{
                        line-height: 37px;
                    }
                    /deep/ .el-radio{
                        margin-right: 10px;
                        font-size: 12px;
                        color: #414141;
                        font-weight: 400;
                    }
                    /deep/.el-radio__label{
                        font-size: 12px;
                    }
                    /deep/.el-radio__input.is-checked+.el-radio__label{
                        color: #C00000;
                    }
                    /deep/.el-radio__input.is-checked .el-radio__inner{
                        border-color: #C00000;
                        background: #C00000;
                    }
                    /deep/.el-input__icon{
                        line-height: 37px;
                    }
                    .input_style{
                        width: 100%;
                        height: 27px;
                        box-shadow: 4px 5px 23px 9px rgba(76, 76, 76, 0.06);
                    }
                }
                .button_box{
                    width: 100%;
                    margin-top: 10px;
                    .button{
                        width: 137px;
                        height: 35px;
                        line-height: 35px;
                        text-align: center;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                        background: #C80200;
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>