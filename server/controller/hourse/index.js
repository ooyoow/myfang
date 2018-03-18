'use strict';

import BaseComponent from '../../prototype/baseComponent';

class Hourse extends BaseComponent {
  constructor() {
    super();
    this.getHouse = this.getHouse.bind(this);
  }
  // async getHouse(req, res, next) {
  //   let cityInfo;
  //   try {
  //   } catch (err) {}
  // }

  async getHouse(ctx, next) {
    // let response = await axios.get(ranking3);
    ctx.body = {
      code: 200,
      success: true,
      data: [
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
      ]
    };
  }
}

export default new Hourse();
