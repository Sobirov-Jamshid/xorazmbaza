let Markets = document.querySelectorAll(".mediapark-market-block")

Markets.forEach(function (Market) {
    let MarketBlock = Market.querySelector(".mediapark-market-button")
    MarketBlock.addEventListener("click", function(){
        Market.classList.toggle("mediapark-market-button-active")
    })

})

let ButtonGroups = document.querySelectorAll(".mediapark-market-button-group");
ButtonGroups.forEach(function (ButtonGroup) {
    let Button1 = ButtonGroup.querySelector(".mediapark-market-button-page-active1")
    let Button2 = ButtonGroup.querySelector(".mediapark-market-button-page-active2")
    Button1.addEventListener("click", function(){
        ButtonGroup.classList.add("mediapark-market-button-group1")
        ButtonGroup.classList.remove("mediapark-market-button-group2")
    })
    Button2.addEventListener("click", function(){
        ButtonGroup.classList.add("mediapark-market-button-group2")
        ButtonGroup.classList.remove("mediapark-market-button-group1")
    })
})
