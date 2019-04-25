<template>
  <div class="header-box">
    <div class="header">
      <section>
        <div  class="login-box">
          <p class="login-tit">坊管理系统</p>
          <form action="">
            <label for="">账号</label>
            <input type="text" class="user-iphone">
            <span></span>
            <label for="">密码</label>
            <input type="password" class="user-pass">
            <span></span>
            <input type="button" class="but" value="登录"></input>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      created() {
        this.$axios({
          methods: "post",
          url: "http://10.102.24.42:8000/Update_b/1/",
        }).then(res => {
          console.log(res.data.msg);
        });
      }
    }
</script>

<style scoped lang="scss">
.header-box{
  width:100%;
  height:100%;
}
  .header{
    width:100%;
    height:100%;
    background: url("../assets/img/loginbj.png") no-repeat;
    background-size: cover;
  }
section{
  width: 13rem;
  height:7.33rem;
  position: fixed;
  left: 50%;
  top:50%;
  margin-left:-6.5rem;
  margin-top:-3.66rem;
  background: red;
  background: url("../assets/img/denglu.png") no-repeat;
  background-size: cover;
  .login-box{
    margin-top:1.6rem;
    margin-left: .41rem;
    .login-tit{
      font-size:.3rem;
      font-family:FZXKFW--GB1-0;
      font-weight:bold;
      color:rgba(53,78,192,1);
    }
    form{
      margin-top:.93rem;
      label,input,button{
        display: block;
      }
      label{
        font-size:.2rem;
        color:rgba(51,51,51,1);
        margin-bottom: .08rem;
      }
      input{
        width: 4rem;
        line-height: .4rem;
        border:0;
        border-bottom: 1px solid #333333;
        background: #E8E9F2;
      }
      span{
        height:.6rem;
        display: block;
        font-size: .2rem;
        color:red;
      }
      .but{
        margin-top:.07rem;
        width:4rem;
        height:.6rem;
        background:rgba(56,81,199,1);
        box-shadow:4px 4px 9px 1px rgba(6,12,39,0.2), -4px -4px 9px 1px rgba(6,12,39,0.2);
        border-radius:.3rem;
        text-align: center;
        line-height: .6rem;
        font-size:.2rem;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
    }
  }
}
</style>
