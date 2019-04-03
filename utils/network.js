import {
  globalUrl
} from "urls.js"
const netWork = {
  getItemList(params) {
    let url = "";
    let count = params.count ? params.count : 7;
    if (params.type === "movie") {
      url = globalUrl.movies
    } else if (params.type === "tv") {
      url = globalUrl.tvs
    } else {
      url = globalUrl.tv_variety
    }
    wx.request({
      url: url,
      data: {
        count: count
      },
      success(res) {
        let items = res.data;
        let itemsCount = items.subject_collection_items.length;
        let lefts = itemsCount % 3;
        if (lefts === 2) {
          items.subject_collection_items.push(null)
        }
        if (params && params.success) {
          params.success(items)
        }
        // console.log(items)
      }
    })
  },
  getMovie(params) {
    params.type = "movie";
    this.getItemList(params);
  },
  getTv(params) {
    params.type = "tv";
    this.getItemList(params);
  },
  getTv_variety(params) {
    params.type = "tv_variety";
    this.getItemList(params);
  },
  getItemDetails(params) {
    let type = params.type;
    let id = params.id;
    let url = "";
    if (type === "movie") {
      url = globalUrl.movie_details + id;
    } else if (type === "tv") {
      url = globalUrl.tv_details + id;
    } else {
      url = globalUrl.tv_variety_details + id;
    }
    wx.request({
      url: url,
      success(res) {
        // console.log(res)
        if (params && params.success) {
          params.success(res.data)
        }
      }
    })
  },
  getItemTags(params) {
    let type = params.type;
    let id = params.id;
    let url = ""
    if (type === "movie") {
      url = globalUrl.movie_tag_url(id);
    } else if (type === "tv") {
      url = globalUrl.tv_tag_url(id);
    } else {
      url = globalUrl.tv_variety_tag_url(id);
    }
    wx.request({
      url: url,
      success(res) {
        // console.log(res);
        if (params && params.success) {
          params.success(res)
        }
      }
    })

  },
  getItemComment(params) {
    let type = params.type;
    let id = params.id,
      count = params.count,
      start = params.start,
      url = "";
    if (type === "movie") {
      url = globalUrl.movie_comment(id, count, start);
    } else if (type === "tv") {
      url = globalUrl.tv_comment(id, count, start);
    } else {
      url = globalUrl.tv_variety_comment(id, count, start);
    }
    wx.request({
      url: url,
      success(res) {
        if (params && params.success) {
          // console.log(res)
          params.success(res)
        }
      }
    })
  }
}
export {
  netWork
}