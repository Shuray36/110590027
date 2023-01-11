const firebaseConfig = {
  apiKey: "AIzaSyB1RrhIvyfF8dCGwp2zK2X5OP1116V5ekQ",
  authDomain: "final-25cc2.firebaseapp.com",
  databaseURL: "https://final-25cc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-25cc2",
  storageBucket: "final-25cc2.appspot.com",
  messagingSenderId: "746653565266",
  appId: "1:746653565266:web:420f763ccd8be4b445ba8b"
};
function uplode(){
  var app1 = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var money = document.getElementById("money").value;
  var str = document.getElementById("itemname").value;
  var app = db.collection('菜單').doc(str);
  app.set({
      price:money,
      itemName:str,
      count:0
  });
}






