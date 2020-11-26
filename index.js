function add() {
    var myDiv = document.getElementById("result");
    if(document.getElementById('title').value!="" && document.getElementById('mySelect').value!=""){
        var addp = document.createElement("textarea");
        addp.setAttribute("class", "myPar");
        addp.readOnly = true;
        myDiv.appendChild(addp);
        var add = document.getElementsByClassName("myPar");
        add[add.length-1].innerHTML = document.getElementById('title').value + "\n" + "(" + document.getElementById('mySelect').value + ")";
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