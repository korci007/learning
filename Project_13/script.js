var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var delButton = document.getElementsByClassName("btn_delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("btn_delete")
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	div.appendChild(button);
	div.classList.add("myList");
	ul.appendChild(div);
	input.value = "";
	createListeners();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListElement() {
	this.classList.toggle("done");
}

function deleteListElement() {
	var parent = this.parentElement;
	var elementNumber = parent.childNodes.length -1;
	for (i=elementNumber; i >= 0; i--) {
		parent.removeChild(parent.childNodes[i]);
	};
}

function createListeners() {
	for (i=0; i < li.length; i++) {
		li[i].addEventListener("click", toggleListElement); 
		delButton[i].addEventListener("click", deleteListElement); 
	};
	button.addEventListener("click", addListAfterClick);
	input.addEventListener("keypress", addListAfterKeypress);
}


createListeners();