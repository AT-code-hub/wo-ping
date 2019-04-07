// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isNavigator: {
      type: Boolean,
      value: false
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
    onInput(event) {
      let value = event.detail.value,
        detail = {
          "value": value
        },
        options = {};
      this.triggerEvent("searchInput", detail, options)
    }
  }
})