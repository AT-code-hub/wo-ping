import {
  netWork
} from "../../utils/network.js"
// pages/details/details.js
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
    // console.log(options)
    let that = this;
    let types = options.type;
    let id = options.id;
    let count = 3;
    let start = 0;
    that.setData({
      type: types,
      id: id
    });
    netWork.getItemDetails({
      type: types,
      id: id,
      success(item) {
        let genres = item.genres;
        let actors = item.actors;
        if (item.directors.length === 0) {
          var director = item.card_subtitle
        } else {
          var director = item.directors[0].name;
        }
        let actorss = [];
        if (actors.length > 3) {
          actors = actors.slice(0, 3);
          for (let i = 0; i < actors.length; i++) {
            actorss.push(actors[i].name)
          }
          actorss = actorss.join("/");
        }
        let authors = director + "(导演) / " + actorss;
        genres.join("/");
        that.setData({
          item: item,
          genres: genres,
          authors: authors
        })
      }
    });
    netWork.getItemTags({
      type: types,
      id: id,
      success(tags) {
        // console.log(tags.data.tags)
        that.setData({
          tagsList: tags.data.tags
        })
      }
    });
    netWork.getItemComment({
      type: types,
      id: id,
      count: count,
      start: start,
      success(commentList) {
        let comList = commentList.data.interests,
          com = commentList.data;
        console.log(comList);
        that.setData({
          comList: comList,
          com: com
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
    wx.pageScrollTo({
      scrollTop: 0
    })
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