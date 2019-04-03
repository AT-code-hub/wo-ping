import {
  netWork
} from "../../utils/network.js"
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let type = options.type;
    let that = this;
    let title = "";
    wx.showLoading({
      title: '加载中...',
    })
    that.setData({
      type: type
    })
    if (type == "movie") {
      //请求电影数据
      netWork.getMovie({
        success(items) {
          that.setData({
            items: items,
            title: items.subject_collection.name
          })
          wx.hideLoading()
        },
        count: 1000
      })
      title = "影院热映"
    } else
    if (type == "tv") {
      //请求电视剧数据
      netWork.getTv({
        success(items) {
          that.setData({
            items: items
          })
          wx.hideLoading()
        },
        count: 1000
      })
      title = "近期热门剧集"
    } else {
      //请求综艺数据
      netWork.getTv_variety({
        success(items) {
          that.setData({
            items: items,
            title: items.subject_collection.name
          })
          wx.hideLoading()
        },
        count: 1000
      })
      title = "近期热门综艺"
    }
    wx.setNavigationBarTitle({
      title: title
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

  }
})