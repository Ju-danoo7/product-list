const emptyCartcontainer = document.querySelectorAll('.cart-container');
const increaseValues = document.querySelectorAll('.increment');
const decreaseValues = document.querySelectorAll('.decrement');
const allAmountWanted = document.querySelectorAll('.amount-wanted');
const allSecondTags = document.querySelectorAll('.secondTag');
const allLayoutTags = document.querySelectorAll('.layoutTags');
const amountWanted = document.querySelector('.amount-wanted');
const amountOrdered = document.querySelector('.amount');
const secondTag = document.querySelector('.secondTag');
const items = document.querySelectorAll('.items');
const cloneSpace = document.querySelector('.cloneSpace')
const removeOrderButtons = document.querySelectorAll('.removeOrder')
const selectedDiv = document.querySelector('#selected');
// const sum = []
const allAddedAmounts = document.querySelectorAll('.times');
const allLayoutAddedAmounts = document.querySelectorAll('.layoutTimes');
const allTotalCosts = document.querySelectorAll('.cost');
const allTotalCostPrices = document.querySelectorAll('.totalCostPrice');
const allLayoutTotalCostPrices = document.querySelectorAll('.layoutTotalCostPrice');
const thirdTag = document.querySelector('.thirdTag')
const orderTotal = document.querySelector('.orderTotal')
const layoutOrderTotal = document.querySelector('.layoutOrderTotal')
const layout = document.querySelector('.layout');
const confirmOrder = document.querySelector('.confirmOrder');
const startOrder = document.querySelector('.startOrder')

let num = JSON.parse(localStorage.getItem('num')) || {}
let sum = {}
let total;
let d;
let dTotal;


emptyCartcontainer.forEach((e, i) => {
    e.addEventListener('click', (input) => {
        itemNumber(e)
        allSecondTags[i].style.display = 'flex';
        allLayoutTags[i].style.display = 'flex';
        selectedDiv.classList.add('itemSelected')
        thirdTag.style.display = 'block'
    })
})


function itemNumber(item) {
    const itemParent = item.parentElement;
    itemParent.classList.add('selected');
    // console.log(itemParent)
}

increaseValues.forEach((e, i) => {
    const itemParent = e.parentElement;
    const itemAmount = itemParent.querySelector('.amount-wanted')
    num[itemAmount.id] = 0

    e.addEventListener('click', () => {
        num[itemAmount.id] += 1
        localStorage.setItem('num', JSON.stringify(num))
        itemAmount.innerHTML = num[itemAmount.id]
        total = Object.values(num).reduce((a, b) => { return a + b })
        amountOrdered.innerText = total
        allAddedAmounts[i].innerText = num[itemAmount.id]
        allLayoutAddedAmounts[i].innerText = num[itemAmount.id]
        d = multiply(num[itemAmount.id], allTotalCosts[i].innerText)
        allTotalCostPrices[i].innerText = d
        allLayoutTotalCostPrices[i].innerText = d
        sum[itemAmount.id] = d
        dTotal = Object.values(sum).reduce((a, b) => { return a + b })
        orderTotal.innerText = dTotal
        layoutOrderTotal.innerText = dTotal
    })
})
decreaseValues.forEach((e, i) => {
    e.addEventListener('click', () => {
        const itemParent = e.parentElement;
        const itemAmount = itemParent.querySelector('.amount-wanted');

        if (num[itemAmount.id] > 0) {
            num[itemAmount.id] -= 1
        }
        total = Object.values(num).reduce((a, b) => { return a + b })
        localStorage.setItem('num', JSON.stringify(num))
        itemAmount.innerText = num[itemAmount.id]
        amountOrdered.innerText = total
        allAddedAmounts[i].innerText = num[itemAmount.id]
        allLayoutAddedAmounts[i].innerText = num[itemAmount.id]
        d = multiply(num[itemAmount.id], allTotalCosts[i].innerText)
        allTotalCostPrices[i].innerText = d
        allLayoutTotalCostPrices[i].innerText = d
        sum[itemAmount.id] = d
        dTotal = Object.values(sum).reduce((a, b) => { return a + b })
        orderTotal.innerText = dTotal
        layoutOrderTotal.innerText = dTotal
        console.log(sum)
    })
})

amountWanted.addEventListener('click', (e) => {
    console.log(e.target.innerText)
})

function newOrderClicked(itemSelected) {
    const locateparent = itemSelected.parentElement.parentElement;
    const nameWith = locateparent.querySelector('.name-with');
    const textName = nameWith.innerText;
    const h3ItemName = document.querySelector('.h3ItemName');
    h3ItemName.innerText = textName

}

removeOrderButtons.forEach((e, i) => {
    e.addEventListener('click', () => {
        const itemParent = items[i].querySelector('.cart-container-2');
        const itemAmount = itemParent.querySelector('.amount-wanted');
        const parent = e.parentElement;
        parent.style.display = 'none';
        items[i].classList.remove('selected')
        num[itemAmount.id] = 0
        localStorage.setItem('num', JSON.stringify(num))
        itemAmount.innerText = num[itemAmount.id]
        total = Object.values(num).reduce((a, b) => { return a + b })
        amountOrdered.innerText = total
        allAddedAmounts[i].innerText = num[itemAmount.id]
        d = multiply(num[itemAmount.id], allTotalCosts[i].innerText)
        allTotalCostPrices[i].innerText = d
        sum[itemAmount.id] = d
        dTotal = Object.values(sum).reduce((a, b) => { return a + b })
        orderTotal.innerText = dTotal
        layoutOrderTotal.innerText = dTotal
        console.log(num[itemAmount.id]);
    })
})

function multiply(a, b) {
    let c = a * b
    return c
}

confirmOrder.addEventListener('click', () => {
    console.log('Clicked')
    layout.classList.add('active');
    // selectedDiv.classList.toggle('inactive')

    
})
startOrder.addEventListener('click', () => {
    console.log('layout Clicked')
    layout.classList.remove('active');
    // selectedDiv.classList.toggle('inactive')
    localStorage.clear()
    orderTotal.innerText = 0
    amountOrdered.innerText = 0
    for(let i = 0; i < items.length; i++){
        items[i].classList.remove('selected')
       let item = items[i].querySelector('.amount-wanted');
      allLayoutTags[i].style.display = 'none';
       num[item.id] = 0
       sum[item.id] = d
       item.innerText = num[item.id]
       allLayoutAddedAmounts[i].innerText = num[item.id]
        allLayoutTotalCostPrices[i].innerText = 0; 
       localStorage.setItem('num', JSON.stringify(num))
       allTotalCostPrices[i].innerText = 0
       
       d = multiply(num[item.id], allTotalCosts[i].innerText)
       sum[item.id] = d
       layoutOrderTotal.innerText = d
       dTotal = Object.values(sum).reduce((a, b) => { return a + b })
       orderTotal.innerText = dTotal
       layoutOrderTotal.innerText = dTotal
       console.log(dTotal)
       
    }
    for(let second of allSecondTags){
        second.style.display = 'none';
    }
    for(let amounts of allAddedAmounts){
        amounts.innerText = 0
    }
    selectedDiv.classList.remove('itemSelected');
    thirdTag.style.display = 'none'

})