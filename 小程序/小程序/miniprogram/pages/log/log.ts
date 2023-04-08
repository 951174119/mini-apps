
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log: string | number | Date) {
        return util.formatTime(new Date(log))
      })
    })
  }
})