const ul = document.querySelector("#user");
const loader = document.getElementById("loading");
const userDate = [];
const url = "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json";

function caunt (x){
    let arr = x.split(",");
    let int = arr.map(element => parseInt(element));
    let sum = int.reduce((acc,ele)=>acc + ele);
    return Math.ceil(sum/10);
}

function fetchData() {
  loader.style.display = "block";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userDate.push(...data);
      loader.style.display = "none";
    })
    .catch((err) => console.log(err));
}
console.log(userDate)
window.addEventListener("load", () => {
 /*    alert("ორჯერ ჭირდება ქლიქი მენიუზე რო ინფუთში ბოქსები ჩაყაროს რატო ვერ ვხვდები") */
  fetchData();
});


const amazon = document.getElementById("amazon");
const walmart = document.getElementById("walmart");
const apple = document.getElementById("apple");
const american = document.getElementById("american");
const UL = document.getElementById("user")
const countResult = document.getElementById("count_result")
/* const companyName1 = document.getElementById("companyName") */

if (amazon) {
    amazon.addEventListener('click', () => {
        userDate.forEach((catchName) => {
            if (catchName.name === "Amazon.com"){
                document.getElementById("count_cargo").value = catchName.boxes;
              /*const getCompanyName = document.createTextNode(catchName.name)
                companyName.appendChild(getCompanyName)  */
               
                let countCargos = caunt(catchName.boxes);
                countResult.innerHTML = countCargos;
            }
            
            });
          
      });
  }

  if (american) {
    american.addEventListener('click', () => {
        userDate.forEach((catchName) => {
            if (catchName.name === "American Express"){
                document.getElementById("count_cargo").value = catchName.boxes; 

                let countCargos = caunt(catchName.boxes);
                countResult.innerHTML = countCargos;
            }
            });
      });
  }

  if (walmart) {
    walmart.addEventListener('click', () => {
        userDate.forEach((catchName) => {
            if (catchName.name === "Walmart"){
                document.getElementById("count_cargo").value = catchName.boxes; 
                
                let countCargos = caunt(catchName.boxes);
                countResult.innerHTML = countCargos;
            }
            });
      });
  }

  if (apple) {
    apple.addEventListener('click', () => {
        userDate.forEach((catchName) => {
            if (catchName.name === "Apple"){
               document.getElementById("count_cargo").value = catchName.boxes; 
               
               let countCargos = caunt(catchName.boxes);
               countResult.innerHTML = countCargos;
            }
            });
      });
  }
