<template>
  <div>
    <div class="head">
      <head-top signin-up='home'>
        <span slot='logo' class="head_logo" @click="reload">myfang</span>
      </head-top>
      <router-link to='/search'>
        <div class="head-search">
          <img class="ser_img" src="../../images/search.png">
          <span class="ser_txt">点击搜索</span>
        </div>
      </router-link>
    </div>
    <section class="content">
      <header class="content_head">
        <p class="content_head_title">主题购房</p>
        <router-link to='/hourse'>
          <p class="content_head_handle">查看所有</p>
        </router-link>
      </header>
      <div>
        <content></content>
      </div>
    </section>
    <section class="content">
      <header class="content_head">
        <p class="content_head_title">推荐房源</p>
      </header>
      <div>
        <hourse-list></hourse-list>
      </div>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/head';
import hourseList from '../../components/common/hourselist';

export default {
  data() {
    return {};
  },

  mounted() {},

  components: {
    headTop,
    hourseList
  },

  computed: {
    // 将获取的数据按照A-Z字母开头排序
  },

  methods: {
    // 点击图标刷新页面
    reload() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.head {
  position: relative;
  height: 9.664rem;
  background: url(https://s1.ljcdn.com/hulk-web/static/m/images/home/head_bg.jpg?id=201607141919&version=eq7ojdu289)
    center no-repeat;
  background-size: cover;
  &-search {
    width: auto;
    height: 1.4rem;
    line-height: 1.4rem;
    padding-left: 0.68rem;
    position: absolute;
    bottom: 0.11rem;
    left: 0.4rem;
    right: 0.4rem;
    margin: 0.32rem 0;
    font-size: 0.5rem;
    border-radius: 0.05rem;
    color: #999;
    text-align: center;
    background-color: #fff;
    .ser_img {
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      vertical-align: text-bottom;
    }
  }
}
.head_logo {
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem, #fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}
.content {
  &_head {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 0.55rem;
    color: #333;
    border-bottom: 0.01rem solid #dcdcdc;
  }
}
</style>
