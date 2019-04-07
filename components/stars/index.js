// components/stars/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      observer(newVal, oldVal, changePath) {
        this.getRate();
      }
    },
    statsSize: {
      type: Number,
      value: 25
    },
    fontSize: {
      type: Number,
      value: 22
    },
    scoreColor: {
      type: String,
      value: "#999"
    },
    isText: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getRate() {
      let that = this;
      let rate = that.properties.rate;
      let intRate = parseInt(rate);
      let light = parseInt(intRate / 2);
      let half = intRate % 2;
      let gary = 5 - light - half;
      let lights = [];
      let halfs = [];
      let garys = [];
      // console.log(gary, half, light, intRate);
      for (let i = 0; i < light; i++) {
        lights.push(i);
      }
      for (let i = 0; i < half; i++) {
        halfs.push(i);
      }
      for (let i = 0; i < gary; i++) {
        garys.push(i);
      }
      // console.log(lights, halfs, garys);
      let rateText = rate && rate > 0 ? rate.toFixed(1) :
        "未评价";
      this.setData({
        lights: lights,
        halfs: halfs,
        garys: garys,
        rateText: rateText
      })
    }
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.getRate();
    }
  }
})