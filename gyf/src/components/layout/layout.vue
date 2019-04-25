<template>
  <el-container>
    <el-aside width="3.2rem;height:100%;overflow:hidden;">
      <div class="aside-tit"></div>
      <div class="nav-box">
        <nav>
          <ul>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
            <li>
              <span>
                <img src="../../assets/img/shoppguan.png" alt="">
              </span>
              <router-link to="/">商品管理</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </el-aside>
    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "layout",
    }
</script>

<style scoped lang="scss">
.el-container{
  width: 100%;
  height:100%;
}
.right-box{
  display: flex;
  flex-direction: column;
}
.el-aside{
  display: flex;
  flex-direction: column;
}
  .aside-tit{
    width: 3.2rem;
    height:.98rem;
    background: #7F63F4;
  }
  .nav-box{
    width: 3.2rem;
    padding-top:.2rem;
  }
  .nav-box{
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 10px 0px rgba(119,119,119,0.1);
    width: 3.2rem;
    flex: 1;
  }
  nav{
   width: 3.2rem;
    ul{
      width: 100%;
      li{
        width: 100%;
        height:.56rem;
        padding:.17rem .32rem;
        overflow: hidden;
        box-sizing: border-box;
        span{
          float: left;
          img{
            width: .32rem;
            height:.22rem;
            display: block;
          }
        }
        a{
          font-size:.16rem;
          color:rgba(127,99,244,1);
          margin-left: .33rem;
          float: left;
        }
      }
    }
  }
</style>
