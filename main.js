async function init(){
  const response = await fetch('https://dummyjson.com/products?limit=10')
  const result = await response.json()
  render(result.products)

}

function render(items){
  const itemsContainer = document.querySelector(".items-container")
  items.forEach(item => {
    const title = document.createElement("h4")
    const titleContent = document.createTextNode(item.title)
    title.appendChild(titleContent)
    const itemCard = document.createElement("li")
    itemCard.appendChild(title)

    itemsContainer.appendChild(itemCard) 
  } )
}