import { users } from "./module/db.js";

let first = document.querySelector('.first')
let second2 = document.querySelector('.second')
let homepagee = document.querySelector('.homepagee')
let ontoday = document.querySelector('.ontoday')

function snake () {
    ontoday.onclick = () => {
        first.classList.remove('.first')
        first.classList.add('first1')
        second2.classList.remove('.second')
        second2.classList.add('second2')
    }

    homepagee.onclick = () => {
        first.classList.remove('first1')
        first.classList.add('first')
        second2.classList.remove('second2')
        second2.classList.add('second')
    }
}

snake()

let numbers = {
    one: document.querySelector('.for_today'),
    two: document.querySelector('.for_tomorrow'),
    three: document.querySelector('.for_later'),
    four: document.querySelector('.fortdtw')
}

let arr = {
    one: [],
    two: [],
    three: [],
    four: [],
}

users.map(item => {
    if(item.left === 0) {
        arr.one.push(item)
        arr.four.push(item)
    } else if (item.left === 1) {
        arr.two.push(item)
    } else {
        arr.three.push(item)
    }
})

let arrr = (arr, numbers) => {
    numbers.innerHTML = ''

    for(let item of arr) {
        numbers.innerHTML += `

        <div class="box">
        <div class="one">
             <input type="checkbox" class="checkbox">
            <p class="Buy">${item.id}</p>
        </div>
        <div class="two">
            <p class="info">${item.title}</p>
        </div>
        <div class="kogda">
            <p class="data">${item.completed}</p>
        </div>
    </div>
        `    
    }
}

arrr(arr.one.slice(0, 4), numbers.one)
arrr(arr.two.slice(0, 4), numbers.two)
arrr(arr.three.slice(0, 4), numbers.three)
arrr(arr.four.slice(0, 4), numbers.four)
