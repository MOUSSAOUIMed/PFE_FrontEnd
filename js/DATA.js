female = document.getElementById('female')
male = document.getElementById('male')
function radio()
{
  if(female.checked)
  {
    return female.value;
  }
  if(male.checked)
  {
    return male.value;
  }
}
function create(){
var db=openDatabase("ReservationDB","1.0","ReservationDB",65535);

 
         db.transaction(function(transaction){
             var sq="CREATE TABLE IF NOT EXISTS User "+
	"(cin VARCHAR(10) NOT NULL PRIMARY KEY,"+
	"nom VARCHAR(30) NOT NULL,"+
    "tele VARCHAR(30) NOT NULL,"+
    "email VARCHAR(50) NOT NULL UNIQUE,"+
    "pw VARCHAR(20) NOT NULL,"+
    "position VARCHAR(20) NOT NULL,"+
    "adresse VARCHAR(250) NOT NULL,"+
	"sexe VARCHAR(10) NOT NULL)";



	var sql="CREATE TABLE IF NOT EXISTS Reservation "+
	"(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
	"dateR DATE NOT NULL,"+
    "typeR VARCHAR(30) NOT NULL,"+
    "priceR INT NOT NULL,"+
    "ticketR INT NOT NULL,"+
	"totalR INT NOT NULL,"+
    "cin VARCHAR(10),"+
    "FOREIGN KEY (cin) REFERENCES User(cin))";

    
            var s = "CREATE TABLE IF NOT EXISTS DateEvent "+
            "(event VARCHAR(40) UNIQUE,"+
            "Nom VARCHAR(30) UNIQUE,"+
            "artiste VARCHAR(30) NOT NULL UNIQUE)";


	transaction.executeSql(sql,undefined)
    transaction.executeSql(s,undefined)
	transaction.executeSql(sq,undefined)
});


}

            function store(){
                
db.transaction(function(transaction){


    var typeR = $("#type").text();
       var ticketR = $("#ticket").text(); 
       var priceR =  $("#price").text();
       var totalR =  $("#total").text();
        var dateR = $("#date").text();
      var  cinV = localStorage.getItem("cin");

var sql=`INSERT INTO Reservation(dateR,typeR,priceR,ticketR,totalR,cin) VALUES(?,?,?,?,?,?)`;

transaction.executeSql(sql,[dateR,priceR,ticketR,typeR,totalR,cinV],function(){
	confirm("La reservation a été bien ajouté");
    window.location = '../templates/Reservation.html';
},function(transaction,err){
	alert(err.message);
})
})
}

function storeUser()
{

        db.transaction(function(transaction){
            var cin = $("#CIN").val();
                 var nom = $("#name").val(); 
                 var tele =  $("#phone").val();
                 var  email=  $("#email").val();
                  var pw = $("#pw").val();
                  var position = $("#position").val();
                  var adresse = $("#adresse").val();
                  var sexe = radio();
          var sql1="INSERT INTO User(cin,nom,tele,email,pw,position,adresse,sexe) VALUES(?,?,?,?,?,?,?,?)";
          transaction.executeSql(sql1,[cin,nom,tele,email,pw,position,adresse,sexe],function(){
              confirm("donnée Utilisateur sont bien Ajoutées");
              window.location = 'Login.html';
          },function(transaction,err){
              alert(err.message);
          })
          })        
   
}
