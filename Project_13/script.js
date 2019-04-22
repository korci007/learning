var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var delButton = document.getElementsByClassName("btn_delete");
var upButton = document.getElementsByClassName("btn_up");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	button2.appendChild(document.createTextNode("Delete"));
	button2.classList.add("btn_delete")
	button1.appendChild(document.createTextNode("Up"));
	button1.classList.add("btn_up")
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	div.appendChild(button1);
	div.appendChild(button2);
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
	this.parentElement.remove();
	/* var parent = this.parentElement;
	var elementNumber = parent.childNodes.length -1;
	for (i=elementNumber; i >= 0; i--) {
		parent.removeChild(parent.childNodes[i]);
	}; */
}

function upListElement() {
	this.parentNode.classList.add("up");
	var result = document.getElementsByClassName("up")[0].parentElement.children;
	for (i=1; i< result.length; i++) {
		if (result[i].className === "myList up") {
			var temp = result[i].innerHTML;
			result[i].innerHTML = result[i-1].innerHTML;
			result[i-1].innerHTML = temp;
		};
	};
	document.getElementsByClassName("up")[0].classList.remove("up");
	createListeners();
}

function createListeners() {
	for (i=0; i < li.length; i++) {
		li[i].addEventListener("click", toggleListElement); 
		delButton[i].addEventListener("click", deleteListElement);
		upButton[i].addEventListener("click", upListElement); 
	};
	button.addEventListener("click", addListAfterClick);
	input.addEventListener("keypress", addListAfterKeypress);
}


createListeners();