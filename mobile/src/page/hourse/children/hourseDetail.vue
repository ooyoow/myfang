<template>
  <div class="hourse_detail_page">
    <head-top class="hourse_detail_page_head" head-title="房源详情" goBack="true"></head-top>
  </div>
</template>
<script>
import headTop from '../../../components/header/head';
export default {
  components: {
    headTop
  }
};
</script>
<style lang="scss" scoped>
.hourse_detail_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f1f1f1;
  z-index: 202;
  padding-top: 2rem;
  &_head {
    background: rgb(60, 170, 230);
  }
}
</style>
