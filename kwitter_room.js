var firebaseConfig = {
      apiKey: "AIzaSyAajPsreyaHNPpGGxGwWvHeEp80v5zL1e8",
      authDomain: "c101-d6374.firebaseapp.com",
      databaseURL: "https://c101-d6374-default-rtdb.firebaseio.com",
      projectId: "c101-d6374",
      storageBucket: "c101-d6374.appspot.com",
      messagingSenderId: "808209744462",
      appId: "1:808209744462:web:48a233016e920b7ba6791f"
    };

    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");





    document.getElementById("user_name").innerHTML="¡Te damos la bienvenida," + user_name + "!"

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database ().ref("/").child(room_name).update({
          purpose : "agregando el nombre de la sala"
      })
  
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala: " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;


      //Inicia el código

      //Finaliza el código
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


      function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location="index.html";
}
