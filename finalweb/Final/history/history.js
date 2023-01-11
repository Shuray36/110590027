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
var ref = db.collection('歷史紀錄');

ref.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        menu.push(doc.data());
        i++;
    });
});




var app = new Vue({
    el:'#app',
    data:{
        itemList:menu
    },
    methods:{
        handledelete: function(index){
            delet(index);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})
function delet(index){
    console.log(menu[index].itemName);
    ref = db.collection('歷史紀錄').doc(menu[index].itemName);
    ref.delete();
}