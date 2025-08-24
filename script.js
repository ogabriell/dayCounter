const getDate = () => {
    oDateOne = document.getElementById("dateOne")
    oDateTwo = document.getElementById("dateTwo")
    console.log(new Date(oDateOne.value))
//    console.log((new Date(oDateTwo.value) - new Date(oDateOne.value)) / (1000 * 60 * 60 * 24))
}