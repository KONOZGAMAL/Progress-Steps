let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let items = document.querySelectorAll('.item')
let add = document.querySelector('.add')
let current = 1;


btn2.addEventListener('click',()=>{
    current++
    if (current > items.length) {
       current = items.length
    }
    update()
})
btn1.addEventListener('click',()=>{
    current--
    if (current < 1) {
       current - 1
    }
    update()
})

function update() {
    items.forEach((el,index)=>{
        if (index < current) {
            el.classList.add('active')
        }else{
            el.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
     add.style.width = (active.length -1) / (items.length - 1) * 100 + '%';
     if (current === 1) {
        btn1.disabled=true
     }else if(current === items.length){
        btn2.disabled=true
     }else{
        btn1.disabled=false
        btn2.disabled=false
     }
    }
