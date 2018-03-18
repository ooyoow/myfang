<template lang="html">
  <div class="full ershou">
    <div class="content" v-for="(item, index) in items" :key="index">
      <router-link to="/hourse/detail" class="link">
        <div class="r-content" @click="a(index)">
            <div class="img">
              <img :src="item.img_url" alt="">
            </div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="subtitle">{{item.subtitle}}</p>
              <p class="money"><span class="tmoney">{{item.tmoney}}</span>{{item.money}}</p>
              <div class="tal">
                <span class="time">{{item.time}}</span>
                <span class="look">{{item.look}}</span>
                <span class="tran" v-for="t in item.tran" :key="t.id">{{t.title}}</span>
              </div>
            </div>
        </div>
      </router-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: {}
    };
  },
  methods: {
    a(index) {
      console.log(1234);
      this.$store.item = this.items[index];
    }
  },
  mounted() {
    // this.axios.get('https://luxroid.com/home/data').then(data => {
    //   // console.log(data)
    //   this.items = data.data;
    // });
    this.items = [
      {
        img_url: 'http://oq6olpne2.bkt.clouddn.com/17-6-4/60285673.jpg',
        title: '万科室 3室2厅 115万',
        subtitle: '3室2厅/86.91㎡/南/富源',
        money: '13233元/平',
        tmoney: '115万',
        look: '',
        tran: [{ title: '有电梯' }],
        time: '满2年'
      },
      {
        img_url: 'http://oq6olpne2.bkt.clouddn.com/17-6-4/60285673.jpg',
        title: '天新区 保利花园三期 毛坯 大四房',
        subtitle: '4室2厅/156.63㎡/南/省政府',
        money: '888元/平',
        tmoney: '140万',
        look: '随时看房',
        tran: [{ title: '有电梯' }],
        time: '满2年'
      },
      {
        img_url: 'http://oq6olpne2.bkt.clouddn.com/17-6-4/60285673.jpg',
        title: '地段优质，单价低，成熟小区配套齐全',
        subtitle: '4室2厅/147m²/南/金星中路',
        money: '9999元/平',
        tmoney: '136万',
        look: '随时看房',
        tran: [{ title: '地铁' }, { title: '有电梯' }],
        time: '2年'
      },
      {
        img_url: 'http://oq6olpne2.bkt.clouddn.com/17-6-4/60285673.jpg',
        title: '绿地公馆  三居室 户型好  采光好  开发商装修',
        subtitle: '3室2厅/118m²/南 北/省政府',
        money: '134433元/平',
        tmoney: '185万',
        look: '随时看房',
        tran: [{ title: '有电梯' }],
        time: ''
      },
      {
        img_url: 'http://oq6olpne2.bkt.clouddn.com/17-6-4/60285673.jpg',
        title: '绿地公馆 交通便利 楼层好 采光好',
        subtitle: '3室2厅/122m²/南/省政府',
        money: '13233元/平',
        tmoney: '150万',
        look: '',
        tran: [{ title: '地铁' }],
        time: ''
      }
    ];
  }
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: #000;
}
.link:visited {
  color: #000;
  text-decoration: none;
}
.full {
  background-color: #fff;
  // padding-left: .53rem;
}
.content {
  border-bottom: 1px solid #e5e5e5;
  padding: 0.53rem 0.53rem 0.53rem 0;
}
.r-content {
  display: flex;
  .img {
    width: 2.88rem;
    img {
      max-width: 100%;
    }
  }
  .right {
    flex: 1;
    padding-left: 0.53rem;
    padding-right: 0.53rem;
    .title {
      line-height: 0.6rem;
      margin-bottom: 0.19rem;
      font-size: 0.43rem;
    }
    .subtitle {
      color: #8b8b8b;
      margin-bottom: 0.19rem;
      font-size: 0.32rem;
    }
    .money {
      font-size: 0.29rem;
      color: #9c9fa1;
      .tmoney {
        color: #fa5741;
        font-weight: 600;
        font-size: 0.4rem;
        margin-right: 0.13rem;
      }
    }
    .tal {
      font-size: 0.5rem;
      .time {
        color: rgb(242, 161, 47);
        background-color: rgba(242, 161, 47, 0.15);
      }
      .look {
        color: rgb(51, 190, 133);
        background-color: rgba(51, 190, 133, 0.15);
      }
      .tran {
        color: rgb(123, 189, 255);
        background-color: rgba(123, 189, 255, 0.15);
      }
    }
  }
}
</style>
