const firebaseConfig = {
  apiKey: "AIzaSyB1RrhIvyfF8dCGwp2zK2X5OP1116V5ekQ",
  authDomain: "final-25cc2.firebaseapp.com",
  databaseURL: "https://final-25cc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-25cc2",
  storageBucket: "final-25cc2.appspot.com",
  messagingSenderId: "746653565266",
  appId: "1:746653565266:web:420f763ccd8be4b445ba8b"
};
var menu=[];
var i=0;
const app1 = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var ref = db.collection('菜單')

ref.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
      menu.push(doc.data())
      i++;
  });
});

console.log(menu)

var app = new Vue({
  el:'#app',
  data:{
      itemList:menu
  },
  methods:{
      handlePlus: function(item){
          item.count++;
      },
      handleSub: function(item){
          if(item.count>0){
          item.count--;                
          }
      },
      handledelete: function(index){
          console.log(this);
          this.itemList.splice(index,1);
      }
  },
  computed:{

  }
})

function up(){
  db = firebase.firestore();

  for(i = 0;i < menu.length;i++){
    console.log(menu[i].itemName)
    app = db.collection('訂單');
    if(menu[i].count != 0){
      app.doc(menu[i].itemName).set({
        price:menu[i].price,
        itemName:menu[i].itemName,
        count:menu[i].count
      });
    }
  }
  setTimeout(2000);

  app = new Vue({
    el:'#app',
    data:{
        itemList:menu
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>0){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{
  
    }
  })

  for(i = 0;i < menu.length;i++){
    console.log(menu[i].itemName)
    app = db.collection('歷史紀錄');
    if(menu[i].count != 0){
      app.doc(menu[i].itemName).set({
        price:menu[i].price,
        itemName:menu[i].itemName,
        count:menu[i].count
      });
    }
  }

  setTimeout(function(){
    history.go(0)
  },2000);
}