const buttonBudget = document.querySelector(".setBudget");
const inputBudget = document.querySelector(".inputBudget");

const inputLabel = document.querySelector(".inputLabel");
const inputCost = document.querySelector(".inputCost");
const buttonAddList = document.querySelector(".addList");

const expenseValue = document.querySelector(".expenseValue");
const balanceValue = document.querySelector(".balanceValue");

balanceValue.textContent = parseFloat("0");
expenseValue.textContent = parseFloat("0");
document.querySelector(".totalValue").textContent = parseFloat("0");

function getDate(){
    let date = new Date().toString().split(" ");
    return date[0] +" "+ date[1] + " "+ date[2];
}


const addBudget = () => {
    if(inputBudget.value != ""){
        balanceValue.textContent = parseFloat(inputBudget.value);
        document.querySelector(".totalValue").textContent = inputBudget.value;
    }
    inputBudget.value = "";
}

const addList = () => {
    if(inputLabel.value.trim() != "" && inputCost.value != "" && inputCost.value < parseInt(balanceValue.textContent)){
        expenseValue.textContent = parseInt(expenseValue.textContent) + parseInt(inputCost.value); 
        balanceValue.textContent = parseInt(balanceValue.textContent) - parseInt(inputCost.value);
        
        let item = `<li class="list-group-item ">
        <div class="">
        <span class="text-muted">${getDate()}</span>
        <div class="row d-flex justify-content-between align-items-center">
            <div class="fw-bold col-8 d-flex">
                <span class="border-start border-primary border-4"></span>
                <h5 class= "mx-3">${inputLabel.value.trim()}</h5>
            </div>
            <div class="col-4 d-flex justify-content-end">
                <h5 class="text-muted">${inputCost.value}</h5>
                <span class="mx-3"><i class="fas fa-trash"></i></span>
                <span class=""><i class="fas fa-edit"></i></span>
            </div>
        </div>

        </div>
      </li>`;

        document.querySelector(".list-group").innerHTML += item;
        

        inputLabel.value = "";
        inputCost.value = "";
    }
}

const deleteElement = () => {
    
}

buttonBudget.addEventListener("click",() => {
    addBudget();
});


buttonAddList.addEventListener("click", () => {
    addList();
});

window.addEventListener("keypress",(e) => {
    if (e.key === "Enter") {
        addBudget();
        addList();
    }
} )



