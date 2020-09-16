<template>
    <div class="appointment">
        <div class="appointment_left">
            <p class="title">购买预约</p>
            <p class="desc_one">专业人士提供个性化资产管理建议</p>
            <p class="desc_two">
                尊敬的投资者，基金专户仅面向合格投资者，您需提交合格投资者相关证明材料，感谢您的关注。
            </p>
        </div>
        <div class="appointment_right">
            <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                <div class="appointment_content">
                    <div class="input_box">
                        <el-form-item label="姓名:" prop="name">
                            <el-input v-model="formInline.name" placeholder=""></el-input>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="电子邮件:" prop="email">
                            <el-input v-model="formInline.email" placeholder="">电话</el-input>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="性别:" prop="sex">
                            <el-radio-group v-model="formInline.sex">
                            <el-radio label="1">先生</el-radio>
                            <el-radio label="2">女士</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="电话:" prop="mobile">
                            <el-input v-model="formInline.mobile" placeholder="">电话</el-input>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="城市:" prop="city">
                            <el-select v-model="formInline.city" placeholder="">
                            <el-option :label="item" :value="item" v-for="(item, index) in selectData" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="投资身份" prop="class">
                            <el-radio-group v-model="formInline.class">
                            <el-radio label="1">个人</el-radio>
                            <el-radio label="2">机构</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <el-form-item label="基金名称:" prop="content">
                            <el-select v-model="formInline.content" multiple collapse-tags placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="input_box">
                        <div class="button_box">
                            <div class="button" @click="onSubmit('form')">提交预约</div>
                        </div>
                    </div>

                    <div class="input_box">
                        
                    </div>
                    <!-- <div class="button_box">
                        <div class="button" @click="onSubmit('form')">提交预约</div>
                    </div> -->
                </div>
            </el-form> 
        </div>
    </div>
</template>
<script>
export default {
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
            }, 1000);
        };
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
            activeIndex: 0,
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            selectData:[
                "北京市",
                "天津市",
                "上海市",
                "重庆市",
                "河北省",
                "河南省",
                "云南省",
                "辽宁省",
                "黑龙江省",
                "湖南省",
                "安徽省",
                "山东省",
                "新疆维",
                "江苏省",
                "浙江省",
                "江西省",
                "湖北省",
                "广西壮族",
                "甘肃省",
                "山西省",
                "内蒙古",
                "陕西省",
                "吉林省",
                "福建省",
                "贵州省",
                "广东省",
                "青海省",
                "西藏",
                "四川省",
                "宁夏回族",
                "海南省",
                "台湾省",
                "香港特别行政区",
                "澳门特别行政区"
            ],
            formInline: {
                name: '',
                sex: "1",
                class: "1",
                city: "",
                email: "",
                mobile: "",
            },
            labelPosition: "top",
            rules: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' },
                ],
                mobile: [
                    { validator: validateMobile, trigger: 'blur' }
                ],
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' },
                ],
                content: [
                    { required: true, message: '基金名称不能为空', trigger: 'blur' },
                ],
            }
        };
    },
    created(){
        this.$Axios.get('/api/v1/netWorth/list',{}).then((data)=>{
            if (data.data.code == 200) {
                data.data.data.list.map(item=>{
                    item.label = item.wond_name;
                    item.value = item.ID;
                });
                this.options = data.data.data.list;
            }
        }).catch(function (error) {
            console.log(error);
        });
    },
  
    methods:{
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                this.formInline.class = parseInt(this.formInline.class)

            if (valid) {
                this.formInline.content = this.formInline.content.toString()
                this.$Axios.post('/api/v1/appointment/',{
                    ...this.formInline
                }).then((res)=>{
                    if (res.data.code == 200) {
                        this.$message({
                            message: '预约成功',
                            type: 'success'
                        });
                        this.resetForm("form")
                    } else {
                        this.$message({
                            message: res.data.msg,
                            type: '预约失败',
                        });
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
                        // margin-bottom: unset;
                        margin-bottom: 15px;
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
                    // margin-top: 10px;
                    margin-top: 25px;
                    .button{
                        width: 137px;
                        height: 35px;
                        line-height: 35px;
                        text-align: center;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                        background: #F13A1C;
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>