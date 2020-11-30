function add() {
    var myDiv = document.getElementById("result");
    // var myDiv = document.getElementsByClassName("listItem");
    if(document.getElementById('title').value!="" && document.getElementById('mySelect').value!=""){
        var addp = document.createElement("li");
        addp.setAttribute("class", "myPar");
        myDiv.appendChild(addp);
        var closeBut = document.createElement("span");
        closeBut.setAttribute("class","closebtn");
        closeBut.setAttribute("title","Șterge");
        var add = document.getElementsByClassName("myPar");
        add[add.length-1].innerHTML = document.getElementById('title').value + "<br />" +   "(" + document.getElementById('mySelect').value + ")";
        add[add.length-1].appendChild(closeBut);
        var cls = document.getElementsByClassName("closebtn");
        cls[cls.length-1].innerHTML = "&times;";
        for (i = 0; i < cls.length; i++) {
            cls[i].onclick = function(){
                var div = this.parentElement;
                console.log(div);
                div.style.opacity = "0";
                setTimeout(function(){ div.style.display = "none"; }, 500);
            }
        }   
    }
    else
        alert("Nu ati completat toate datele!");
}

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var myDiv = document.getElementById("myDiv");

const subjects = ["PC", "USO", "Mate1" , "Mate2"];

var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

var option0 = document.createElement("option");
option0.setAttribute("value","");
option0.text = "Alege materie";
option0.setAttribute('selected', 'selected');
option0.disabled = true;
selectList.appendChild(option0);

for (var i = 0; i < subjects.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", subjects[i]);
    option.text = subjects[i];
    selectList.appendChild(option);
}