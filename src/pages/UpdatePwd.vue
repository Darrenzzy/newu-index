<template>
    <div class="login">
        <PublicBg>
            <div class="login_form">
                <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                    <div class="login_form_content">
                        <div class="input_box">
                            <el-form-item label="就密码:" prop="user">
                                <el-input v-model="formInline.mobile" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                            <el-form-item label="新密码:">
                                <el-input v-model="formInline.password" placeholder=""></el-input>
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
            return {
                activeIndex: 0,
                formInline: {
                    mobile: "",
                    password: "",
                },
                labelPosition: "top",
                rules: {
                    mobile: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码benign唯恐', trigger: 'change' }
                    ],
                }
            };
        },
        created(){
            this.$Axios.post('api/admin/v1/sysUser',{
                deptId: 10,
                email: "123@qq.com",
                nickName: "test2",
                password: "123456",
                phone: "17856376472",
                postId: 1,
                remark: "test2",
                sex: "1",
                status: "1",
                username: "test2",
            }).then(function(res){
                console.log(res)
            }).catch(function (error) {
                console.log(error);
            });
        },
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
    .login{
        height: 100%;
    }
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
</style>