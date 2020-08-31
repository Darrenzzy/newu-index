<template>
    <div>
        <div class="video_box">
            <video class="video" src="http://cdn.jian24.com/1548381208553958.mp4" preload="none" controls="controls" height="100%" >
            </video>
        </div>
        <div class="table_box">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </div>
        <!-- <img src="./../assets/banner.png"/> -->
       
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
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
        }
    }
</script>
<style scoped lang="less">
   .video_box{
       width: 100%;
       height: 400px;
       background: black;
    }
    .video{
       width: 50%;
       margin: 0 auto;
       height: 100%;
       display: block;
    }   
    .table_box{

    } 
</style>