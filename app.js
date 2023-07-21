
export function app() {
    
    let entriesOfLocalStorage = Object.entries(localStorage)
    console.log(entriesOfLocalStorage)
    //transform string array to number array
    let idArraySorted = Object.keys(localStorage).map(Number)
    //find the max
    let lastId = Math.max(...idArraySorted)
    console.log(lastId);
    //logic to set id
    console.log(Boolean(Infinity));
    if(lastId == '-Infinity') {
        lastId = 0
    } else {
        lastId
    }
    console.log('ID', lastId);
    let idArray = Object.keys(localStorage)
    getProductsFromDB(idArray)
    
    //references
    const inputFieldEl = document.getElementById("input-field")
    const addButtonEl = document.getElementById("add-button")
    const appContainerEl = document.getElementById('app-el')
    const colorPickerEl = document.getElementById('color-picker')
    
    //listeners
    addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value
        
        function localStorageId() {
            lastId += 1
            idArray.push(lastId)
            return lastId
        }
        let localID = localStorageId()
        //save products in the DB
        localStorage.setItem(localID, inputValue)      
        
        inputFieldEl.value = ''
        cleanList()
        getProductsFromDB(Object.keys(localStorage))
    })
    //Dinamic Background color
    colorPickerEl.addEventListener('input', function() {
        let value = colorPickerEl.value
        appContainerEl.style.filter = `hue-rotate(${value}deg)`
    })

}

function getProductsFromDB(array) {
    array.map((id) => {
        let localProduct = localStorage.getItem(id)
        appendItemToproductListEl(localProduct)
    })
}

function appendItemToproductListEl(item) {
    //references
    const productListEl = document.getElementById('products-list')

    let newEl = document.createElement('li')
    newEl.textContent = item
    
    //listeners
    newEl.addEventListener('click', function(){
        let value = newEl.textContent
        let entries = Object.entries(localStorage)
        entries.map((entrie) => {
            if(entrie[1] === value) {
                localStorage.removeItem(entrie[0])
                let array = Object.keys(localStorage)
                cleanList()
                getProductsFromDB(array) 
            }

        })        
    })
    productListEl.append(newEl) 
}

function cleanList() {
    //references
    const productListEl = document.getElementById('products-list')
    productListEl.innerHTML = ''
}
