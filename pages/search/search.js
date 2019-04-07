import {
  netWork
} from "../../utils/network.js"
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.getStorage({
      key: 'searched',
      success: function(res) {
        console.log(res);
        let histotys = res.data;
        that.setData({
          historys: histotys
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onSearchInput(event) {
    let that = this;
    let value = event.detail.value;
    if (!value && value === "") {
      that.setData({
        subject: []
      });
      return;
    }
    netWork.getSearch({
      p: value,
      success: (list) => {
        console.log(list);
        let subject = list.data.subjects;
        that.setData({
          subject: subject
        });
      }
    })
  },
  onItemTap: function(event) {
    let that = this;
    // console.log(that)
    let id = event.currentTarget.dataset.id;
    let title = event.currentTarget.dataset.title;
    let historys = that.data.historys;
    let isA = false;
    if (historys) {
      for (let i = 0; i < historys.length; i++) {
        let movie = historys[i];
        if (movie.id === id) {
          isA = true;
          break;
        }
      }
    }
    if (!isA) {
      if (!historys) {
        historys = []
      }
      historys.push({
        id: id,
        title: title
      });
      wx.setStorage({
        key: 'searched',
        data: historys,
        success: () => {
          console.log("保存成功")
        }
      });
    }
    wx.navigateTo({
      url: '/pages/details/details?type=movie&id=' + id,
    })
  },
  clear: function() {
    wx.removeStorage({
      key: 'searcheds',
      success: function(res) {
        console.log("清除成功！")
      },
    });
    this.setData({
      historys: null
    })
  }
})