const globalUrl = {
  zUrl: "https://m.douban.com",
  movies: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvs: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  tv_variety: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  movie_details: "https://m.douban.com/rexxar/api/v2/movie/",
  tv_details: "https://m.douban.com/rexxar/api/v2/tv/",
  tv_variety_details: "https://m.douban.com/rexxar/api/v2/tv/",
  movie_tag_url(id) {
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/tags?count=8"
  },
  tv_tag_url(id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
  },
  tv_variety_tag_url(id) {
    return this.tv_tag_url(id)
  },
  movie_comment(id, count = 3, start = 0) {
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/interests?count=" + count + "&start=" + start;
  },
  tv_comment(id, count = 3, start = 0) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start;
  },
  tv_variety_comment(id, count = 3, start = 0) {
    return this.tv_comment(id, count, start);
  },
  searchUrl: (q) => {
    return "https://m.douban.com/rexxar/api/v2/search?q=" + q;
  }
}
export {
  globalUrl
}