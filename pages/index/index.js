import {
  netWork
} from "../../utils/network.js"

// pages/index/index.js
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
    wx.showLoading({
      title: '正在加载...'
    })
    let that = this;
    //电影
    netWork.getMovie({
      success(movies) {
        that.setData({
          movies: movies
        })
      }
    })
    // 电视剧
    netWork.getTv({
      success(tvs) {
        that.setData({
          tvs: tvs
        })
      }
    })
    // 综艺
    netWork.getTv_variety({
      success(tv_variety) {
        that.setData({
          tv_variety: tv_variety
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideLoading()
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