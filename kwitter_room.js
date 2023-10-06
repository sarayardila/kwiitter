
var firebaseConfig = {
  apiKey: "AIzaSyB4ju-RaxmkuEyDIEwD12PsX9v9rYG_Wxo",
  authDomain: "clasre-1bb16.firebaseapp.com",
  databaseURL: "https://clasre-1bb16-default-rtdb.firebaseio.com",
  projectId: "clasre-1bb16",
  storageBucket: "clasre-1bb16.appspot.com",
  messagingSenderId: "686575927236",
  appId: "1:686575927236:web:0f4d0297a2a360dec1ee91",
  measurementId: "G-D5WJGWCPQ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "agregando el nombre de la sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
console .log(name);
localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html"
}