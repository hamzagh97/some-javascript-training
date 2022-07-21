document.querySelectorAll('nav ul li a').forEach(a => {
	a.addEventListener("click", function(e) {
		e.preventDefault();
		window.scrollTo(0, 500);
	})
});

// document.querySelector("body").style.paddingTop = document.querySelector("header").offsetHeight + "px";

let inputNumber = document.querySelector("input[type='number']");
let inputText = document.querySelector("input[type='text']");
let subButton = document.querySelector("input[type='submit']");


document.forms[0].onsubmit = function(event) {
    event.preventDefault();
    document.querySelectorAll(".results .box").forEach((box) => box.remove());

    for (let i = 0; i < inputNumber.value; i++) {
        let newDiv = document.createElement(document.querySelector("form select").value);
        newDiv.className = "box";
        newDiv.title = "element"
        newDiv.append(document.createTextNode(inputText.value))
        document.querySelector(".results").appendChild(newDiv);
    }
}


let inputAdd = document.querySelector(".classes-to-add");
let inputRemove = document.querySelector(".classes-to-remove");
let allClasses = document.querySelector(".classes-list > div");

inputAdd.addEventListener("blur", function () {
	if (this.value.trim() !== "") {
		this.value
			.trim()
			.split(" ")
			.forEach((cls) => {	
			let curClass = document.createElement("span");
			let curText = document.createTextNode(cls);
			curClass.append(curText);
			allClasses.append(curClass);
	})
	this.value = "";
	}
	});


	inputRemove.addEventListener("blur", function () {
		if (this.value.trim() !== "") {
			this.value
				.trim()
				.split(" ").filter(function(ele) {
						return [...allClasses.children] = ele.value;
					}).remove();
		this.value = "";
		}
		});
	



document.getElementsByTagName("p")[1].remove();
let dvBefore = document.createElement("div");
dvBefore.setAttribute("class", "start")
dvBefore.setAttribute("title", "Start Element")
dvBefore.setAttribute("data-value", "Start")
dvBefore.append(document.createTextNode("start"))
document.querySelector(".our-element").before(dvBefore)
let dvAfter = document.createElement("div");
dvAfter.setAttribute("class", "end")
dvAfter.setAttribute("title", "End Element")
dvAfter.setAttribute("data-value", "End")
dvAfter.append(document.createTextNode("end"))
document.querySelector(".our-element").after(dvAfter)



let divEx = document.querySelector(".ex");
console.log(divEx.childNodes[4].textContent.trim());


[...document.querySelector(".ex5").children].forEach(function(child) {
	child.onclick = function () {
		console.log(`This Is ${this.tagName}`);
	};
});

console.log(document.querySelector(".ex5").childNodes[1].innerHTML)

function countdown() {
	document.querySelector(".ex").childNodes[0].textContent -= 1;
}

console.log(location)


/* setInterval(countdown, 6000) */
/*let range = prompt("Print Number From – To");
let arrRange = range.split("-");
let arrMin = arrRange.sort((a, b) => a - b)[0].trim();
let arrMax = arrRange.sort((a, b) => b - a)[0].trim();

for(let i=arrMin; i<=arrMax; i++) {
		console.log(i);
	}*/



	// let header = document.createElement("header");
	// header.style.cssText = "display: flex; align-items: center; justify-content: space-between"
	// let logo = document.createTextNode("elzero");
	// let nav = document.createElement("ul");
	// nav.style.cssText = "display: flex; list-style: none"



	// function createNavLink(txt) {
	// 	let li = document.createElement("li");
	// 	let a = document.createElement("a");
	// 	a.href = "#";
	// 	a.style.cssText =
	// 		"color: rgb(103 103 103); font-weight: 600; display: block; margin: 0 10px; font-size: 1.1rem; text-decoration: none";
	// 	a.append(document.createTextNode(txt));
	// 	li.append(a);
	// 	nav.append(li);
	// }

	// createNavLink("home");
	// createNavLink("about");
	// createNavLink("services");
	// createNavLink("contact")

	// header.append(logo);
	// header.append(nav);
	// document.body.append(header)

	// setTimeout(function() {
	// 	let popup = document.createElement("div");
	// 	popup.classList.add("popup");
	// 	let title = document.createElement("h1");
	// 	let titleText = document.createTextNode("welcome");
	// 	let content = document.createElement("p");
	// 	let contentText = document.createTextNode("welcome to elzero web school")
	// 	let closePopup = document.createElement("span")
	// 	let closePopupText = document.createTextNode("x")
	// 	title.append(titleText);
	// 	content.append(contentText);
	// 	popup.append(title)
	// 	popup.append(content);
	// 	closePopup.append(closePopupText);
	// 	closePopup.classList.add("close")
	// 	popup.append(closePopup)
	// 	document.body.append(popup);
	// }, 3000)

	// document.addEventListener("click", function (e) {
	// 	if (e.target.className === "close") {
	// 		e.target.parentElement.remove();
	// 	}
	// });

	// let ex3Div = document.querySelector(".ex3");

	// let counter = setInterval(function countdown() {
	// 	ex3Div.textContent--;
	// 	if (ex3Div.textContent === "0") {
	// 		clearInterval(counter);
	// 	}
	// }, 1000)

	
	
	/** start slider */
	
	let sliderImages = Array.from(document.querySelectorAll(".slider-images img"));
	let slideCount = sliderImages.length;
	let slideContainer = document.querySelector(".slider-images")
	let prevButton = document.querySelector(".previous-btn");
	let nextButton = document.querySelector(".next-btn");
	
	for (let i = 1; i<= slideCount; i++) {
		paginationItem =  document.createElement("li");
		paginationItem.setAttribute('data-index', i);
		paginationItem.append(document.createTextNode(i));
		document.querySelector(".pagination-bullets").append(paginationItem);
	}

	let currentSlide = 0;
	checker();

	
	

	

	nextButton.addEventListener("click", function() {
		slide('right')
	})
	prevButton.addEventListener("click", function() {
		slide('left')
	})
	for (let i = 0; i < slideCount; i++) {
	document.querySelectorAll(".pagination-bullets li")[i].onclick = function() {
		currentSlide = parseInt(this.getAttribute("data-index"));
		console.log(currentSlide)
		checker();
	}
	}

	function slide(direction) {
		let width = 100;
		
		if (direction == "left") {
			currentSlide += 1;
		}
		if (direction == "right") {
			currentSlide -= 1;
		}

		if (-currentSlide < 0) {
			currentSlide = 0;
		}

		if (-currentSlide == slideCount) {
			currentSlide = -slideCount + 1
		}
		let translateWidth = width * currentSlide;
		slideContainer.style.transform = `translateX(${translateWidth}%)`;
		
		checker();
		console.log(currentSlide);
		console.log(slideCount)
	}

	function checker() {
		
		document.querySelector(".image-number").textContent = 'Image ' + (-currentSlide + 1) + ' of ' + (slideCount);
			document.querySelectorAll(".pagination-bullets li").forEach(function (li) {
				li.classList.remove('active');
				});
				// document.querySelectorAll(".pagination-bullets li")[currentSlide].classList.add("active");

		
		if (currentSlide == 0) {
			prevButton.classList.add('disabled');
			} else {
			prevButton.classList.remove('disabled');
			}
			if (-currentSlide == slideCount - 1) {
			nextButton.classList.add('disabled');
			} else {
			nextButton.classList.remove('disabled');
			}
		
	}

	/** end slider */

	
	// window.onload = function() {
	// 	[...document.querySelectorAll("a")].filter(function(el) {
	// 		return el.classList.contains("open") && el.textContent === "Elzero"
	// 	})[0].click()
	// }

	// window.onload = function() {
			// [...document.querySelectorAll("a")]
			// .filter(function (a) {
      //       return a.classList.contains("open") && a.textContent === "Elzero"
      //     })[0].click();
      //   };


	let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
	let reg = /\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+/ig
	console.log(ip.match(reg));


	let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
	let regO = /\bOs\d{0,}O\b/ig
	console.log(specialNames.match(regO));

	// Output
	// ['Os10O', 'OsO', 'Os100O']


	let phone = "+(995)-123 (4567)";
	let regPhone = /\+\(\d{2,3}\)\-\d{3}\s\(\d{4}\)/ig
	console.log(phone.match(regPhone));

	let href = "https://:elzero.webschool.[-com]";
	let reHref = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;
	console.log(href.match(reHref));



	let date1 = "25/10/1982";
	let date2 = "25 - 10 - 1982";
	let date3 = "25 10 1982";
	let date4 = "25 10 82";
	
	let reDate = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)\d{2,}/ig; // Write Pattern Here
	
	console.log(date1.match(reDate)); // "25/10/1982"
	console.log(date2.match(reDate)); // "25 - 10 - 1982"
	console.log(date3.match(reDate)); // "25 10 1982"
	console.log(date4.match(reDate)); // "25 10 82"


	let url1 = 'elzero.org';
	let url2 = 'http://elzero.org';
	let url3 = 'https://elzero.org';
	let url4 = 'https://www.elzero.org';
	let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
	let url6 = 'https://www.youtube.com/watch?v=_n_oiZRqH_k&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=146&ab_channel=ElzeroWebSchool'

	let reUrl = /(https?:\/\/)?(www.)?\w+.\w{3}([\S]*)?/ig; // Write Your Pattern Here

	console.log(url1.match(reUrl));
	console.log(url2.match(reUrl));
	console.log(url3.match(reUrl));
	console.log(url4.match(reUrl));
	console.log(url5.match(reUrl));
	console.log(url6.match(reUrl));



	class Car {
		constructor (name, model, price) {
			this.n = name;
			this.m = model;
			this.p = price;
		}
		run() {
			return "Car Is Running Now";
		}
		stop() {
			return "Car Is Stopped";
		}
	}


	let carOne = new Car("MG", "2022", 420000);
	let carTwo = new Car("dacia", "1987", 800000);
	let carThree = new Car("ferrari", "2012", 2000000);


	console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
	console.log(`Car One Name Is ${carTwo.n} And Model Is ${carTwo.m} And Price Is ${carTwo.p}`)
	console.log(`Car One Name Is ${carThree.n} And Model Is ${carThree.m} And Price Is ${carThree.p}`)

	console.log(carOne.run());


	  // Needed Output

	"Car One Name Is MG And Model Is 2022 And Price Is 420000"
	"Car Is Running Now"




	class Phone {
		constructor(name, serial, price) {
		  this.name = name;
		  this.serial = serial;
		  this.price = price;
		}
	  }
	  
	  // Write Tablet Class Here

	  class Tablet extends Phone {
		constructor(name, serial, price, size) {
			super(name, serial, price);
			this.size = size || "unknown";
		}
		fullDetails() {
			return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
		}
	  }


	  
	  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
	  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
	  let TabletThree = new Tablet("LG", 250450650, 650);
	  
	  console.log(`${TabletOne.fullDetails()}`);
	  // iPad Serial is 100200300 And Size Is 12.9
	  
	  console.log(`${TabletTwo.fullDetails()}`);
	  // Nokia Serial is 350450650 And Size Is 10.5
	  
	  console.log(`${TabletThree.fullDetails()}`);
	  // LG Serial is 250450650 And Size Is Unknown

	  



	  // Edit The Class
class User {
	#c
	constructor(username, card) {
		this.u = username;
		this.#c = card.toString().match(/\d{4}-\d{4}-\d{4}-\d{4}/ig) ? card : this.chunk(card, 4);
	}
	showData() {
		return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`
	}
	chunk(str, n) {
		var newStr = str.toString();
		var ret = [];
	
		for(let i = 0; i < newStr.length; i += n) {
		   ret.push(newStr.substr(i, n))
		}
	
		return ret.join('-')
	};
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData());
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData());
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData());
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined



  // Write Your Code Here


// Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School







  const myObj = {
	username: "Elzero",
	id: 100,
	score: 1000,
	country: "Egypt",
  };
  
  // Write Your Code Here
  Object.defineProperty(myObj, "score", {
	writable: false,
  });
  myObj.score = 500;



  Object.defineProperty(myObj, "id", {
	enumerable: false,
  });

  delete myObj.country;
  
  for (let prop in myObj) {
	console.log(`${prop} => ${myObj[prop]}`);
  }
  
  console.log(myObj);
  
  // Needed Output
  
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}


const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";