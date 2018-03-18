<template>
  <div class="paddingTop search_page">
    <head-top class="search_page_head" head-title="搜索" goBack="true"></head-top>
    <div class="search_page_inp_con">
      <div class="search_page_inp_bac_con"><img src="/assets/images/searchIconGray.f2895150.png">
        <input type="text" placeholder="请输入城市 / 邮编 / 地址 / 学校 / 社区搜索" value="">
      </div>
      <p class="cancel">取消</p>
    </div>
    <div class="search_guide_con_mo">
      <ul class="search_guide_left_mo">
        <li class="search_guide_mo true" style="border-top: none;">
          <!-- react-text: 9616 -->搜索历史
          <!-- /react-text --><img src="/assets/images/historyIcon.81e3a532.png"></li>
        <li class="search_guide_mo" style="color: rgb(250, 130, 10);">
          <!-- react-text: 9619 -->热门城市
          <!-- /react-text --><img src="/assets/images/hotIcon.8d1af74d.png"></li>
      </ul>
      <ul class="search_guide_right_mo">
        <li class="search_guide_desc" style="background-color: transparent; cursor: auto;">
          <div class="search_guide_name_en" style="color: rgb(153, 153, 153);">无搜索历史</div>
        </li>
      </ul>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>
<script>
import headTop from '../../components/header/head';
export default {
  components: {
    headTop
  }
};
</script>
<style lang="scss" scoped>
.search_page {
  &_head {
    background: rgb(60, 170, 230);
  }
}
</style>
