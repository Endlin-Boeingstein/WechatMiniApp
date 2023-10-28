// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    info:'hello world',
    imgSrc:'http://www.itheima.com/images/logo.png',
    randomNum1:Math.random()*10,
    randomNum2:Math.random().toFixed(2),
    count:0,
    msg:'你好',
    type:1,
    flag:true,
    arr1:['苹果','华为','小米'],
    userList:[
      {id:1,name:'小红'},
      {id:2,name:'小黄'},
      {id:3,name:'小白'}
    ]
  },

  btnTapHandler(e){
    console.log(e);
  },

  CountChange(){
    this.setData({
      count:this.data.count+1
    })
  },

  btnTap2(e){
    this.setData({
      count:this.data.count+e.target.dataset.info
    })
  },

  inputHandler(e){
    //console.log(e.detail.value)
    this.setData({
      msg:e.detail.value
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
