var firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAg0tGWsKqtjZcRnFPrBroVn8r111Q4EKY",
    authDomain: "bkappdb.firebaseapp.com",
    databaseURL: "https://bkappdb.firebaseio.com",
    projectId: "bkappdb",
    storageBucket: "bkappdb.appspot.com",
    messagingSenderId: "1087681092838"
};

var app = firebase.initializeApp(config)

// 建立 DB
var db = firebase.database()

//set
var db_path = 'messages/'

//db root
var myDataRef = db.ref(db_path)

//只讀取一次
myDataRef.once('value', function(snapshot) {
    var data = snapshot.val()
    console.log(data)
})

// //資料異動時每次都全部取得
// myDataRef.on('value', function(snapshot) {
//     var data = snapshot.val()
//     console.log(data)
// })

//只取得加入的項目
myDataRef.on('child_added', function(snapshot) {
    var data = snapshot.val();
    console.log(data)
        //console.log('----------------------' + new Date().getUTCMilliseconds() + '----------------------')
});