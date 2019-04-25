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
      <div class="menu-box">
        <div class="menu">
          <div class="actively-one-tit">
            <img src="./../../assets/img/goback.png" class="menu-image" alt="">
            <span class="menu-words">添加活动</span>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </el-main>




  </div>
</template>



<script>
  export default {
    name: "actively",
    data() {
      return {
        options: [{
          value: '0',
          label: '黄金糕'
        }, {
          value: '1',
          label: '双皮奶'
        }, {
          value: '2',
          label: '蚵仔煎'
        }, {
          value: '3',
          label: '龙须面'
        }, {
          value: '4',
          label: '北京烤鸭'
        }],
        value: '',
        radio2: 3,
        radio1: 0,
        dialogImageUrl: '',
        dialogVisible: false,
        img_list:[]    //上传图片文件
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
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>



<style lang="scss">
  .shoop-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;


    /*头部*/
    .menu-box{
      width: 100%;
      height:100%;
      background: #fff;
      box-shadow:0px 3px 10px 0px rgba(119,119,119,0.1);
      border-radius:3px;
      .menu{
        width: 100%;
        height:100%;
        padding:.28rem;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        /*公共头部*/
        .actively-one-tit{
          width: 100%;
          overflow: hidden;
          .menu-image{
            width: .22rem;
            height:.22rem;
            margin-right: 12px;
            float: left;
            margin-top: .06rem;
          }
          .menu-words{
            font-size:.22rem;
            color:rgba(70,74,83,1);
            float: left;
          }
        }


      }
    }
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





































  }
</style>
