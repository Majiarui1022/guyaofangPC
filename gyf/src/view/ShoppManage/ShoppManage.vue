<template>
  <div class="shoop-box">
    <el-header>
      <div class="header">
        <div class="search-box">
          <div class="img-box">
            <img src="../../assets/img/Icon.png" alt="">
          </div>
          <input type="text" class="search-ipt" placeholder="搜索..."/>
        </div>
        <div class="header-back">
          <div class="image-box">
            <img src="../../assets/img/back.png" alt="">
          </div>
          <span>退出</span>
        </div>
      </div>
    </el-header>

    <el-main>
      <div class="view-box">
        <div class="table-box">
          <div class="manage-tit">
            <img src="../../assets/img/add.png" alt="">
          </div>
            <!--表格部分-->
          <div class="manage-table">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="商品名称">
              </el-table-column>
              <el-table-column
                prop="address"
                label="价格">
              </el-table-column>
              <el-table-column
                prop="addtiemrs"
                label="添加时间">
              </el-table-column>
              <el-table-column
                prop="classify"
                label="所属分类">
              </el-table-column>
              <el-table-column
                prop="priority"
                label="优先级">
              </el-table-column>
              <el-table-column
                prop="operation"
                label="操作">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </el-main>




  </div>
</template>

<script>
  export default {
    name: "ShoppManage",
    data() {
      return {
        tableData: [{
          date: '01',
          name: '白茶',
          address: '￥500',
          addtiemrs:'02/06/2018',
          classify:'茶',
          priority:'A',
          operation:''
        }, {
          date: '01',
          name: '白茶',
          address: '￥500',
          addtiemrs:'02/06/2018',
          classify:'茶',
          priority:'A',
          operation:''
        }, {
          date: '01',
          name: '白茶',
          address: '￥500',
          addtiemrs:'02/06/2018',
          classify:'茶',
          priority:'A',
          operation:''
        },
          {
            date: '01',
            name: '白茶',
            address: '￥500',
            addtiemrs:'02/06/2018',
            classify:'茶',
            priority:'A',
            operation:''
          },
          {
            date: '01',
            name: '白茶',
            address: '￥500',
            addtiemrs:'02/06/2018',
            classify:'茶',
            priority:'A',
            operation:''
          },
          {
            date: '01',
            name: '白茶',
            address: '￥500',
            addtiemrs:'02/06/2018',
            classify:'茶',
            priority:'A',
            operation:''
          },
          {
            date: '01',
            name: '白茶',
            address: '￥500',
            addtiemrs:'02/06/2018',
            classify:'茶',
            priority:'A',
            operation:''
          }, {
          date: '01',
          name: '白茶',
          address: '￥500',
          addtiemrs:'02/06/2018',
          classify:'茶',
          priority:'A',
          operation:''
        }]
      }
    },
  }
</script>


<style lang="scss">
  .shoop-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;



    header{
      width: 100%;
      height:.98rem !important;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding-top:.24rem;
      padding-right:.66rem;
      background: #fff;
    }
    .header{
      width: 100%;
      height:100%;
      overflow: hidden;
      .search-box{
        position: relative;
        overflow: hidden;
        float: left;
        .search-ipt{
          width: 3.51rem;
          height:.5rem;
          background:rgba(243,243,243,1);
          border-radius:3px;
          float: left;
        }
        .img-box{
          width: .55rem;
          height:.5rem;
          background: #F3F3F3;
          float: left;
          img{
            width: .13rem;
            height: .13rem;
            display: block;
            margin:0 auto;
            margin-top: .18rem;
          }
        }
      }
      .header-back{
        float: right;
        overflow: hidden;
        cursor: pointer;
        margin-top:.1rem;
        .image-box{
          float: left;
          img{
            width: .29rem;
            height:.29rem;
            display: block;
          }
        }
        span{
          float: left;
          font-size:.19rem;
          color:rgba(127,99,244,1);
          margin-left: .15rem;
        }
      }
    }

    /*主体*/
    .view-box{
      width: 100%;
      height:100%;
      padding:.24rem .32rem .53rem .32rem;
      box-sizing: border-box;
      .table-box{
        width: 100%;
        height:100%;
        .manage-tit{
          width: 100%;
          overflow: hidden;
          img{
            display: block;
            float: right;
            margin-bottom: .4rem;
            width: .94rem;
            height:.33rem;
          }
        }
        /*表格部分*/
        .manage-table{
          width: 100%;
          height:8.1rem;
          .el-table__header{
            tr{
              th{

                background: #F2F5F8 !important;
              }
            }
          }
        }
      }
    }








































  }
</style>
