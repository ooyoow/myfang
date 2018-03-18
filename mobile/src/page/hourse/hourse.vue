<template>
  <div>
    <head-top class="hourse_page_head" head-title="房源" goBack="true"></head-top>
    <div class="hourse_page_content">
      <hourse-list></hourse-list>
    </div>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import headTop from '../../components/header/head';
import hourseList from '../../components/common/hourselist';
export default {
  components: {
    headTop,
    hourseList
  }
};
</script>
<style lang="scss" scoped>
.hourse_page {
  background: #fff;
  &_head {
    background: rgb(60, 170, 230);
  }
  &_content {
    padding: 2rem 0.5rem 0 0.5rem;
  }
}
</style>
