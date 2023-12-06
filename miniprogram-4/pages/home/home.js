// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    swiperList:[],
    gridList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList();
    this.getGridList();
  },

  //获取轮播图数据
  getSwiperList(){
    // wx.request({
    //   url: 'https://applet-base-api-t.itheima.net/slides',
    //   method:'GET',
    //   success:(res)=>{
    //     console.log(res)
    //     this.setData({
    //       swiperList:res.data
    //     })
    //   }
    // })
    this.setData({
      swiperList:[
        {
          id:1,
          image:"/images/tabs/home.png"
        },
        {
          id:2,
          image:"/images/tabs/cart.png"
        }
      ]
    })
  },

  //获取九宫格
  getGridList(){
    // wx.request({
    //   url: 'https://applet-base-api-t.itheima.net/categories',
    //   method:'GET',
    //   success:(res)=>{
    //     this.setData({
    //       gridList:res.data
    //     })
    //   }
    // })
    this.setData({
      gridList:[
        {
          id:1,
          icon:"/images/tabs/home.png",
          name:"占位符1"
        },
        {
          id:2,
          icon:"/images/tabs/home.png",
          name:"占位符2"
        },
        {
          id:3,
          icon:"/images/tabs/home.png",
          name:"占位符3"
        },
        {
          id:4,
          icon:"/images/tabs/home.png",
          name:"占位符4"
        },
        {
          id:5,
          icon:"/images/tabs/home.png",
          name:"占位符5"
        },
        {
          id:6,
          icon:"/images/tabs/home.png",
          name:"占位符6"
        },
        {
          id:7,
          icon:"/images/tabs/home.png",
          name:"占位符7"
        },
        {
          id:8,
          icon:"/images/tabs/home.png",
          name:"占位符8"
        },
        {
          id:9,
          icon:"/images/tabs/home.png",
          name:"占位符9"
        },
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
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