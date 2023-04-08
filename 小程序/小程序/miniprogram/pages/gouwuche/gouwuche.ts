// pages/gouwuche/gouwuche.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddening:false,
    goods:[
        {"name":"青菜","pz":"品种:小青菜 产地:四川","imgUrl":"/images/UI/dining-1-2.jpg","price":"￥8.90","imgSelected":"/images/UI/s1.png","delImg":"/images/UI/icon-delete.png",count:0},
        {"name":"羊肉","pz":"品种:肥羊卷 产地:澳洲","imgUrl":"/images/UI/dining-18.jpg","price":"￥8.90","imgSelected":"/images/UI/s1.png","delImg":"/images/UI/icon-delete.png",count:0},
        {"name":"苹果","pz":"品种:苹果 产地:甘肃","imgUrl":"/images/UI/dining-3.jpg","price":"￥8.90","imgSelected":"/images/UI/s1.png","delImg":"/images/UI/icon-delete.png",count:0},
        {"name":"有机石板米","pz":"品种:大米 产地:黑龙江","imgUrl":"/images/UI/grain-1.jpg","price":"￥8.90","imgSelected":"/images/UI/s1.png","delImg":"/images/UI/icon-delete.png",count:0},
        {"name":"玉米油","pz":"品种:玉米油 产地:山东","imgUrl":"/images/UI/grain-16.jpg","price":"￥8.90","imgSelected":"/images/UI/s1.png","delImg":"/images/UI/icon-delete.png",count:0},
        {"name":"大米","pz":"品种:大米 产地:东北","imgUrl":"/images/UI/grain-23.jpg","price":"￥8.90","imgSelected":"/images/UI/s1.png","delImg":"/images/UI/icon-delete.png",count:0},
       ]
  },
  //商品数量减少函数
  itemCountSub: function (e:any) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goods;
    if (list[index].count > 0) {
      list[index].count = --list[index].count;
      this.setData({
        goods: list,
      });
    }
  },
  //商品数量增加函数
  itemCountAdd: function (e:any) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goods;
    list[index].count = ++list[index].count;
    this.setData({
      goods: list,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(){
    // 页面渲染完成
    var that=this;
    setTimeout(function(){
         that.setData({
           hiddening:true
         })
    },2000)
  },
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})