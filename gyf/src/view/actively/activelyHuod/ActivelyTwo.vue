<template>
  <div class="activelyOne-box">
    <div class="activelyOne-left">
      <div class="tit-but">
        <router-link to="/ActivelyOne" >模板一</router-link>
        <a href="javascript:void(0)" class="active">模板二</a>
        <router-link to="/ActivelyThree">模板三</router-link>
      </div>
      <table>
        <tbody>
        <tr>
          <td>
            <label>活动名称</label>
            <input type="text" placeholder="填写活动开始时间" class="activelyOne-startTime">
            <label for="" style="margin-left: .53rem">状态</label>
            <el-radio v-model="radioa" label="1">现货</el-radio>
            <el-radio v-model="radioa" label="2">期货</el-radio>
          </td>
          <td class="inp-none">
            <label for="">活动时间范围</label>
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </td>
          <td>
            <label for="">活动地址</label>
            <input type="text" placeholder="填写活动地址" class="actively-site">
          </td>
          <td class="section-big">
            <div class="section-left">
              <label for="">活动人数</label>
              <input type="text" placeholder="填写活动人数" class="actively-num">
            </div>
            <div class="section-right">
              <label for="">负责人号码</label>
              <input type="text" placeholder="填写联系方式" class="actively-iphone">
            </div>
          </td>

          <td class="zhuti-photo" style="height: auto;">
            <label for="" style="margin-top:.2rem">主题照片</label>
            <div class="activelyOne-photo">
              <el-upload
                action="string"
                ref="upload"
                list-type="picture-card"
                :http-request="addAttachment"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :multiple="true"
                class="photo"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
              <p>750*370 png. jpg格式</p>
            </div>
          </td>
          <td class="zhuti-photo" style="height: auto;">
            <label for="" style="margin-top:.2rem">商品照片</label>
            <div class="activelyOne-photo">
              <el-upload
                action="string"
                ref="upload"
                list-type="picture-card"
                :http-request="addAttachment"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :multiple="true"
                class="photo"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
              <p>750*370 png. jpg格式</p>
            </div>
          </td>
          <td class="zhuti-photo" style="height: auto;">
            <label for="" style="margin-top:.2rem">活动海报</label>
            <div class="activelyOne-photo">
              <el-upload
                action="string"
                ref="upload"
                list-type="picture-card"
                :http-request="addAttachment"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :multiple="true"
                class="photo"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
              <p>750*370 png. jpg格式</p>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="activelyOne-right"></div>
  </div>
</template>

<script>
  export default {
    name: "ActivelyTwo",
    data(){
      return{
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        dialogImageUrl: '',
        dialogVisible: false,
        img_list:[],    //上传图片文件
        radioa:'2'     //状态
      }
    },

    methods: {
      addAttachment (params) {
        //console.log(item)
        let formData = new FormData()
        formData.append('file', params.file)
        formData.append('type', 'SKU')
        formData.append('id', this.$route.params.id)
        console.log('上传图片接口-参数', params.file)
        var self = this,
          file = params.file,
          fileType = file.type,
          file_url = self.$refs.upload.uploadFiles[0].url;
        params.file.url = self.$refs.upload.uploadFiles[0].url;
        this.img_list.push(params.file)
        console.log(this.img_list)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        console.log('发送axios请求')
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style lang="scss">
  .activelyOne-box{
    width: 100%;
    height:100%;
    .activelyOne-left{
      width: 9.5rem;
      height:100%;
      margin-left: .22rem;
      .tit-but{
        width:100%;
        overflow: hidden;
        padding:.48rem 0;
        a{
          width:.94rem;
          height:.33rem;
          background:rgba(255,255,255,1);
          box-shadow:0px 3px 7px 0px rgba(6,33,88,0.3);
          border-radius:17px;
          font-size:.16rem;
          color:rgba(70,74,83,1);
          line-height:.33rem;
          text-align: center;
          float: left;
          margin-right: .32rem;
        }
        .active{
          background: #7F63F4;
          color:#fff;
        }
      }
      table{
        width: 100%;
        tr{
          .inp-none{
            .el-range-editor.el-input__inner{
              width: 3.6rem;
              height:.48rem;
              padding:0;
            }
            .el-range-separator{
              line-height: .45rem;
            }
            input{
              border: 0;
              height:.45rem;
              font-size: .15rem;
              line-height: .48rem;
            }
            .el-date-editor .el-range__icon{
              display: none;
            }
          }
          .section-big{
            overflow: hidden;
            .section-left{
              float: left;
              height:100%;
              display: flex;
              align-items: center;
              margin-right: .3rem;
              .actively-num{
                width: 1.29rem;
              }
            }
            .section-right{
              float: left;
              height:100%;
              display: flex;
              align-items: center;
              .actively-iphone{
                width: 3.14rem;
              }
            }
          }
          td{
            display: flex;
            align-items: center;
            height:.84rem;
            input{
              height:.48rem;
              font-size:.15rem;
              color:rgba(153,153,153,1);
              line-height:.48rem;
              text-indent: .19rem;
              border:1px solid rgba(221, 223, 225, 1);
              border-radius: 3px;
            }
            label{
              font-size:.18rem;
              font-weight:bold;
              color:rgba(70,74,83,1);
              margin-right:.08rem;
            }
            .activelyOne-startTime{
              width: 3.12rem;
            }
            .actively-site{
              width: 3.12rem;
            }
          }

          /*上传图片样式修改*/
          .zhuti-photo{
            margin-top: .3rem;
            label{
              white-space: nowrap;
              margin-top: 0;
            }
            p{
              font-size:.12rem;
              color:rgba(127,99,244,1);
            }
            .photo{
              height: auto;
              display: flex;
              flex-wrap: wrap;
            }
            .el-upload--picture-card{
              width: .8rem;
              height: .8rem;
              position: relative;
              background: url("../../../assets/img/addphoto.png") no-repeat;
              background-size: cover;
              border:0;
              i{
                /*position: absolute;*/
                /*left: 0.26rem;*/
                /*top: .25rem;*/
                display: none;
              }
            }
            ul{
              display: flex;
              flex-wrap: wrap;
              li{
                width: .8rem;
                height: .8rem;
              }
            }
          }
        }
      }
    }
  }
</style>
