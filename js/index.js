const hearts = document.getElementById("hearts");
const heartButtons = document.getElementsByClassName("heart");
let heartsCount = 0;
for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function() {
        if (heartButtons[i].classList.contains("active")) {
            heartButtons[i].classList.remove("active");
            heartsCount--;
            heartButtons[i].innerHTML = `<i class="fa-regular fa-heart"></i>`;
        } else {
            heartButtons[i].classList.add("active");
            heartsCount++;
            heartButtons[i].innerHTML = `<i class="fa-solid fa-heart text-red-700"></i>`;
        }
        hearts.innerText = heartsCount;
    });
}

const copies = document.getElementById("copies");
const copyButtons = document.getElementsByClassName("copy");
let copiesCount = 0;
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const card = this.closest(".card"); 
    const number = card.querySelector("h2").innerText; 

    navigator.clipboard.writeText(number)
    .then(() => {
      alert(`Copied ${number} to clipboard`);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
      
    copiesCount++;
    copies.innerText = copiesCount;
  });
}

const coins = document.getElementById("coins");
const callBtn = document.getElementsByClassName('call-btn')
const history = document.getElementById("history");
let coinsCount = 100;
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener("click", function () {
        if (coinsCount < 20) {
        alert("You don't have enough coins to make a call.");
    } else {
        alert(`Calling ${callBtn[i].closest(".card").querySelector("p").innerText} at ${callBtn[i].closest(".card").querySelector("h2").innerText}`)
        coinsCount -= 20;
        const div = document.createElement("div");
        div.innerHTML += `<div class="card-item flex items-center justify-between bg-[#FAFAFA] rounded-lg py-2">
                    <div class="flex flex-col w-3/5 ml-2">
                        <h3 class="text-lg font-semibold">${callBtn[i].closest(".card").querySelector("h1").innerText}</h3>
                        <p class="text-lg text-[#5C5C5C]">${callBtn[i].closest(".card").querySelector("h2").innerText}</p>
                    </div>
                    <div class="text-lg mr-2">${new Date().toLocaleTimeString()}</div>
                </div>`;
            history.appendChild(div);
    }
    coins.innerText = coinsCount;
    })
}
const clearBtn = document.getElementById("clear-btn");
const cardItem = document.getElementsByClassName("card-item");
clearBtn.addEventListener("click", function () {
    history.innerHTML = '';
});
