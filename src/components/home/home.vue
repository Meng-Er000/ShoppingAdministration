<template>
  <div class="home">
    <div class="homeheader">
      <img src="../../assets/黑马logo.png" class="headerlogo"/>
      <span class="logoname">电商后台管理系统</span>
      <div class="loginform">
        <el-form label-width="0px">
          <el-form-item class="item-button">
            <el-button v-on:click="signOut()">退出</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    signOut () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-button{
  float: right;
  color: #FFFFFF;
  border-color: #909399;
  background-color: #909399;
  margin-top: -50px;
  margin-right: 20px;
}
.el-button:focus, .el-button:hover {
  color: #ffffff;
  border-color: rgba(144,147,153,0.7);
  background-color: rgba(144,147,153,0.7);
}
.homeheader{
  width: 100%;
  height: 60px;
  background-color: #373d41;
}
.logoname{
  display: block;
  font-size: 22px;
  color: #FFFFFF;
  position: absolute;
  top: 15px;
  left: 65px;
}
.headerlogo{
  display: block;
  width: 50px;
  height: 50px;
  padding: 5px;
}
</style>
