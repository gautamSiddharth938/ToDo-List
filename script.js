const boxitem = document.getElementById('box');
let listitem = document.getElementById('list');
let items = document.getElementById('todoitems');
let bucket = document.getElementById('bucketistitems');
let btn = document.getElementById('cross')
// let top = document.getElementsByClassName('topend');

// boxitem.addEventListener("keyup", listenToMe);
function listenToMe(event) {
    if (event.key == 'Enter') {
        console.log(this.value);
        // addtodo(this.value);
        additem(this.value)
        this.value = " ";
    }
    // console.log(event.key);
}
btn1.addEventListener("click", todoitem);
btn2.addEventListener("click", bucketitem);
function todoitem() {
    // console.log(boxitem.value)
    additem(boxitem.value)
    boxitem.value = " ";
}
function bucketitem() {
    // console.log(boxitem.value)
    addbucketitem(boxitem.value)
    boxitem.value = " ";
}
function additem(value) {
    const listsegment = document.createElement('li')
    listsegment.innerHTML = `${value}`
    // renderLinkIcon(listitem)
    items.appendChild(listsegment)
    const check = document.createElement('input')
    check.type = "checkbox"
    check.class = "checkmark"
    check.disabled = false
    check.style.width = '2rem'
    check.style.height = '1.5rem'
    listsegment.prepend(check)
    check.addEventListener("click", () => {
            // let a = confirm("You really want to delete that item from To Do list ?")
            // if (a) {
            //     items.removeChild(listsegment)
            // }
            check.disabled = true
            let cancel = document.createElement('DEL') // need to work in these lines because they are not perfect
            cancel.textContent = listsegment.innerText
            listsegment.innerText = ""
            // cancel.className = "cancel-button"
            // let val = cancel.innerText
            listsegment.prepend(check)
            listsegment.appendChild(cancel)
            renderLinkIcon(listsegment)

            // items.appendChild(listsegment)
            // listsegment.add
            // cancel.addEventListener("click", ()=>{
            //     alert("Item is not deleted.")
            //     items.removeChild(cancel)
            // })
             cancel.id = "cancel"
             
            //  console.log(x);
            // cancel.appendChild(`${value}`)
            // listsegment.append(cancel)
            // x.replaceChild(cancel, x)
            // cancel.addEventListener("click", () => {
            //     items.removeChild(listsegment)
            // })
            // listsegment.replaceChild(cancel)
            // cancel.addEventListener("click", () => {
            //     items.removeChild(listsegment)
            // })
            // listsegment.appendChild(cancel)
    })
    // draggable functionality 

    // document.getElementById('cross').addEventListener('click',()=>{
    // 
    // })
    // document.getElementsByName('svg').addEventListener("click", ()=>{
    //     document.getElementsByName('svg').style.fill = 'white'
    //     items.removeChild(listsegment)
    // })


    // listsegment.includes('svg').addEventListener("click", ()=>{
    //     listsegment.style.backgroundColor = 'green'

    // })
    // listsegment.addEventListener("click", () => {
    //     listsegment.style.backgroundColor = 'green'
    //     listsegment.addEventListener("click", () => {
    //         let a = confirm("You really want to delete that item from To Do list ?")
    //         if (a) {
    //             items.removeChild(listsegment)
    //         }
    //     })
    // })

    // listsegment.addEventListener("click", () => {
    // const cut = document.createElement('hr')

    // listsegment.appendChild(cut)
    // })
    renderLinkIcon(listsegment)
    function renderLinkIcon(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        iconSvg.setAttribute('fill', '#000000');
        iconSvg.setAttribute('viewBox', '0 0 32 32');
        iconSvg.style.width = '2rem'
        iconSvg.style.height = '1.5rem'
        iconSvg.style.position = 'relative'
        // iconSvg.style.backgroundColor = 'red'
        iconSvg.style.display = 'flex'
        iconSvg.style.justifyContent = 'flex-start'
        iconSvg.style.alignItems = 'flex-start'
        // iconSvg.setAttribute('stroke', 'black');
        // iconSvg.classList.add('post-icon');

        iconPath.setAttribute(
            'd',
            'M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z'
        );
        // iconPath.setAttribute('stroke-linecap', 'round');
        // iconPath.setAttribute('stroke-linejoin', 'round');
        // iconPath.setAttribute('stroke-width', '2');
        iconPath.style.width = '2.5rem'
        iconPath.style.height = '1.5rem'
        iconPath.style.position = 'relative'
        iconSvg.appendChild(iconPath);

        iconSvg.addEventListener("click", () => {
            // listsegment.style.backgroundColor = 'green'
            // listsegment.addEventListener("click", () => {
                if (check.disabled) {
                    let a = confirm("You really want to delete that item from To Do list ?")
                    if (a) {
                        items.removeChild(listsegment)
                    }
                } 
            // })
        })
        // console.log(iconSvg)
        return node.appendChild(iconSvg);
        // return node.appendChild(iconSvg)
}}
function addbucketitem(value) {
    const arraysegment = document.createElement('span')
    arraysegment.innerHTML = `${value}`
    // renderLinkIcon(listitem)
    bucket.appendChild(arraysegment)
    const check = document.createElement('input')
    check.type = "checkbox"
    check.class = "checkmark"
    check.disabled = false
    check.style.width = '2rem'
    check.style.height = '1.5rem'
    arraysegment.prepend(check)
    check.addEventListener("click", () => {
        check.disabled = true
        let cancel = document.createElement('DEL') // need to work in these lines because they are not perfect
        cancel.textContent = arraysegment.innerText
        arraysegment.innerText = ""
        // cancel.className = "cancel-button"
        // let val = cancel.innerText
        arraysegment.prepend(check)
        arraysegment.appendChild(cancel)
        renderLinkIcon(arraysegment)
    })
    // document.getElementById('cross').addEventListener('click',()=>{
        // 
        // })
        // document.getElementsByName('svg').addEventListener("click", ()=>{
        //     document.getElementsByName('svg').style.fill = 'white'
        //     items.removeChild(listsegment)
        // })
    
    
        // listsegment.includes('svg').addEventListener("click", ()=>{
        //     listsegment.style.backgroundColor = 'green'
    
        // })
        // listsegment.addEventListener("click", () => {
        //     listsegment.style.backgroundColor = 'green'
        //     listsegment.addEventListener("click", () => {
        //         let a = confirm("You really want to delete that item from To Do list ?")
        //         if (a) {
        //             items.removeChild(listsegment)
        //         }
        //     })
        // })
    
        // listsegment.addEventListener("click", () => {
        // const cut = document.createElement('hr')
    
        // listsegment.appendChild(cut)
    // })
    renderLinkIcon(arraysegment)
    function renderLinkIcon(node) {
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );
    
            iconSvg.setAttribute('fill', '#000000');
            iconSvg.setAttribute('viewBox', '0 0 32 32');
            iconSvg.style.width = '2rem'
            iconSvg.style.height = '1.5rem'
            iconSvg.style.position = 'relative'
            // iconSvg.style.backgroundColor = 'red'
            iconSvg.style.display = 'flex'
            iconSvg.style.justifyContent = 'flex-start'
            iconSvg.style.alignItems = 'flex-start'
            // iconSvg.setAttribute('stroke', 'black');
            // iconSvg.classList.add('post-icon');
    
            iconPath.setAttribute(
                'd',
                'M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z'
            );
            // iconPath.setAttribute('stroke-linecap', 'round');
            // iconPath.setAttribute('stroke-linejoin', 'round');
            // iconPath.setAttribute('stroke-width', '2');
            iconPath.style.width = '2.5rem'
            iconPath.style.height = '1.5rem'
            iconPath.style.position = 'relative'
            iconSvg.appendChild(iconPath);
    
            iconSvg.addEventListener("click", () => {
                // listsegment.style.backgroundColor = 'green'
                // arraysegment.addEventListener("click", () => {
                    if (check.disabled) {
                        let a = confirm("You really want to delete that item from To Do list ?")
                        if (a) {
                            bucket.removeChild(arraysegment)
                        }
                    }
                // })
            })
            // console.log(iconSvg)
            return node.appendChild(iconSvg);
            // return node.appendChild(iconSvg)
}}


// const addtodo = (item) => {
//     const listsegment = document.createElement('li');
//     listsegment.innerHTML = `${item}`;
//     listitem.appendChild(listsegment)

//     // listitem.appendChild(listsegment);
// }

// function renderLinkIcon(node) {
//     const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     const iconPath = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'path'
//     );
  
//     iconSvg.setAttribute('fill', 'none');
//     iconSvg.setAttribute('viewBox', '0 0 24 24');
//     iconSvg.setAttribute('stroke', 'black');
//     iconSvg.classList.add('post-icon');
  
//     iconPath.setAttribute(
//       'd',
//       'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
//     );
//     iconPath.setAttribute('stroke-linecap', 'round');
//     iconPath.setAttribute('stroke-linejoin', 'round');
//     iconPath.setAttribute('stroke-width', '2');
  
//     iconSvg.appendChild(iconPath);
  
//     return node.appendChild(iconSvg);
//   }

