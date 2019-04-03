import {
  netWork
} from "../../utils/network.js"
// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 5,
    start: 1,
    preLoading: false,
    nextLoading: false,
    disabledIs: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '正在加载...'
    })
    let that = this;
    that.setData(options);
    that.getComments(that.data.start);
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
  onItemTabEven: function() {
    wx.navigateBack({})
  },
  // onReachBottom: function() {//下拉刷新
  //   let that = this;
  //   let countSum = that.data.count + 5;
  //   that.setData({
  //     count: countSum
  //   })
  //   wx.showLoading({
  //     title: '正在加载...'
  //   });
  //   let options = that.data;
  //   // console.log(count)
  //   netWork.getItemComment({
  //     type: options.type,
  //     id: options.id,
  //     count: options.count,
  //     start: 1,
  //     success(commentList) {
  //       wx.hideLoading();
  //       console.log(commentList);
  //       that.setData({
  //         commentList: commentList
  //       })
  //     }
  //   })
  // }
  getComments(start) {
    let that = this,
      type = that.data.type,
      id = that.data.id;
    if (start > that.data.start) {
      that.setData({
        nextLoading: true
      })
    } else {
      that.setData({
        preLoading: true
      })
    }
    netWork.getItemComment({
      type: type,
      id: id,
      start: start,
      count: that.data.count,
      success(commentList) {
        console.log(commentList);
        wx.hideLoading();
        wx.pageScrollTo({
          scrollTop: 0
        });
        that.setData({
          commentList: commentList,
          start: start,
          preLoading: false,
          nextLoading: false,
          disabledIs: false,
          total: commentList.data.total
        })
      }
    })
  },
  onPrePage(event) {
    wx.showLoading({
      title: '正在加载...',
    });
    let that = this;
    that.setData({
      disabledIs: true
    });
    let oldStart = that.data.start;
    if (oldStart - that.data.count > 0) {
      let start = oldStart - that.data.count;
      that.getComments(start);
    } else {
      wx.hideLoading();
      wx.showToast({
        title: '已经是第一页',
        icon: 'none',
        duration: 1000
      });
      that.setData({
        disabledIs: false
      });
    }
  },
  onNextPage(event) {
    wx.showLoading({
      title: '正在加载...',
    });
    let that = this,
      oldStart = that.data.start,
      start = oldStart + that.data.count;
    that.setData({
      disabledIs: true
    });
    console.log(start);
    if (start >= that.data.total) {
      wx.showToast({
        title: '已经是最后一页',
        icon: 'none',
        duration: 1000
      });
      that.setData({
        disabledIs: false
      });
    } else {
      that.getComments(start);
    }

  }
})