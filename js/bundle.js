document.getElementById("name").innerHTML=localStorage.getItem("name");
document.getElementById("pos").innerHTML=localStorage.getItem("position");
dateR = localStorage.getItem("date");
type = localStorage.getItem("type");
price = localStorage.getItem("price");
ticket = localStorage.getItem("ticket");
total = localStorage.getItem("total");

Ticket = "tickets"
[ {'Dat' : dateR,
'typ' : type,
'prc' : price,
'tick' : ticket,
'tot' : total}]
save =  function ()
{
    json = JSON.stringify(Ticket);
    console.log(json)
}


