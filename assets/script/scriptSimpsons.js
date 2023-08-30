let storeData = (data) => {
    console.log(data)
}
    

    function start() {

        sessionStorage.clear();
        let userPerso = prompt("Choose your favorite Simpson please")
        sessionStorage.setItem('personnage', userPerso)
        document.querySelector("#usersChoice").innerHTML = userPerso.toUpperCase()
        console.log(userPerso )
    
        document.querySelector("#usersChoice").innerHTML = userPerso.toUpperCase()

        storeData()
    
    }

    function modif() {
    
        let userPerso = prompt("Change your Simpson please")
        sessionStorage.setItem('personnage', userPerso)
        document.querySelector("#usersChoice").innerHTML = userPerso.toUpperCase()
        console.log(userPerso)
    }





fetch('../assets/data/dataSimpson.json')
.then(response => response.json())
.then(data => storeData(data))