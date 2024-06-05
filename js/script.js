const name = document.querySelector("h1");
name.addEventListener("click", evt =>{
    let username=prompt("Please enter your name, feel free to add your full name and any titles so long as they're seperated by spaces","");
    let usersplit = username.split(" ");
    let correctuser ="";
    for (word of usersplit) {
        correctuser += word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase() + " ";
    }
    name.textContent = `Hello ${correctuser}!`
})

let date = new Date();
let dateOptions = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
const dateBox = document.querySelector("#date");
dateBox.textContent = date.toLocaleDateString("en-IE",dateOptions);

let day = date.getDate()
const dayBox = document.querySelector("#daysq");
dayBox.textContent = `The current day squared is ${Math.pow(day, 2)}`;

let year = date.getFullYear()
const yearBox = document.querySelector("#yearsqr");
yearBox.textContent = `The square root of the current year is ${Math.sqrt(year).toFixed(2)}`;

const btn = document.querySelector('button')
const results = document.querySelector("#results")
const image = document.querySelector("#image")
const image1 = document.querySelector("#image1")
const correct = document.querySelectorAll(".correct")
const inputs = document.querySelectorAll("input")
const allLables = document.querySelectorAll("label")
const scoreList = document.querySelector("#scorelist")
let scoreArray = [];

btn.addEventListener('click', () => {
  score = document.querySelectorAll("input[value=right]:checked");
  results.textContent = (`You got ${score.length}/4 correct`)
    image.style.display = "none"
    image1.style.display = "none"
    
  if (score.length == 4)
      {
          image.style.display = "block"
      }
  else if (score.length == 0)
      {
          image1.style.display = "block"
      }
    
    for ( i = 0; i < allLables.length; i++) {
    allLables[i].style.cssText = "color:black !important";
    }
    
    for ( i = 0; i < inputs.length; i++) {
        id = inputs[i].getAttribute("id")
        label = document.querySelector(`label[for=${id}]`)
        if (inputs[i].getAttribute("value")=="right" && inputs[i].checked)
            {
                label.style.cssText = "color:green !important";
            }
        else if (inputs[i].getAttribute("value")=="right" && inputs[i].checked == false)
            {
                label.style.cssText = "color:blue !important";
            }
        else if (inputs[i].getAttribute("value")=="wrong" && inputs[i].checked)
            {
                label.style.cssText = "color:red !important";
            }
    }
    
    scoreArray.push(score.length)

    scoreList.innerHTML= "";
        for ( i = 0; i < scoreArray.length; i++) {
        let li = document.createElement('li')
	   li.textContent=scoreArray[i]
	   scoreList.appendChild(li)
    }
    
})

scoreList.addEventListener('click', evt => {
	if(evt.target.matches('li')) {
        const thisItem = evt.target
		thisItem.style.opacity = '0'
        setTimeout(() => {
	      scoreList.removeChild(thisItem);
	    }, 500) 
	}
})  