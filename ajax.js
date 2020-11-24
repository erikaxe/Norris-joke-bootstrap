const buttonRandom = document.querySelector('.btn-random')
const buttonFood = document.querySelector('.btn-food')
const buttonScience = document.querySelector('.btn-science')

buttonRandom.addEventListener('click', function(){
    const request =  new XMLHttpRequest; /* säger att det är ett "ajax" */
    request.open('GET', 'https://api.chucknorris.io/jokes/random', true); /* hämta url, GET hämta data, POST skicka data, PUT / PATCH förändra data som redan finns i en databas, DELETE ta bort data */
    request.onload = function(){ /* när den har hämtat data, så kör den här function */
        if(this.status == 200){ /* requestens status, vanliga codes: 200 440 400 500 (http status codes) */
            let data =  this.responseText
            data = JSON.parse(data) /* används mkt, analyserar texten och omvandlar strängen till ett objekt */
            console.log(data)
            const list = document.querySelector('.card')
            list.innerHTML = `
            <ul class="list">
                <li class="list-item">
                    <div class="li-cont">
                        <img src=${data.icon_url}>
                        <span>${data.value}</span>
                    </div>
                </li> 
            </ul>
            `
        }
    }
    request.send()
})

buttonFood.addEventListener('click', function(){
    const request =  new XMLHttpRequest;
    request.open('GET', 'https://api.chucknorris.io/jokes/random?category=food', true);
    request.onload = function(){
        if(this.status == 200){
            let data =  this.responseText
            data = JSON.parse(data)
            console.log(data)
            const list = document.querySelector('.card')
            list.innerHTML = `
            <ul class="list">
                <li class="list-item">
                    <div class="li-cont">
                        <img src=${data.icon_url}>
                        <span>${data.value}</span>
                    </div>
                </li> 
            </ul>
            `
        }
    }
    request.send()
})

buttonScience.addEventListener('click', function(){
    const request =  new XMLHttpRequest;
    request.open('GET', 'https://api.chucknorris.io/jokes/random?category=science', true);
    request.onload = function(){
        if(this.status == 200){
            let data =  this.responseText
            data = JSON.parse(data)
            console.log(data)
            const list = document.querySelector('.card')
            list.innerHTML = `
            <ul class="list">
                <li class="list-item">
                    <div class="li-cont">
                        <img src=${data.icon_url}>
                        <span>${data.value}</span>
                    </div>
                </li> 
            </ul>
            `
        }
    }
    request.send()
})





/* https://api.chucknorris.io/jokes/random */
/* https://api.chucknorris.io/jokes/random?category=celebrity */
/* https://api.chucknorris.io/jokes/random?category=food */
/* https://api.chucknorris.io/jokes/random?category=history */
/* https://api.chucknorris.io/jokes/random?category=sport */
/* https://api.chucknorris.io/jokes/random?category=science */