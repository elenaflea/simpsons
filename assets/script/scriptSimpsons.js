

    function start() {
      

        
        let favouriteCharacter = sessionStorage.getItem('personnage')

        let inputFavouriteCharacter = () => {
            sessionStorage.clear();
            let userPerso = prompt("Choose your favourite Simpson please")
            sessionStorage.setItem('personnage', userPerso)
            localStorage.setItem('perso', userPerso)
            document.querySelector("#usersChoice").innerHTML = userPerso.toUpperCase()
            console.log(userPerso)

            let storeData = (data) => {
            
                console.log(data.simpsons)
                let userPerso = sessionStorage.getItem("personnage")

                document.querySelector("#name").innerHTML = "No info about " + userPerso.toUpperCase()
                document.querySelector("#age").innerHTML = ""
                document.querySelector("#hair").innerHTML = ""
                document.querySelector("#parent").innerHTML = ""

                if (userPerso){
                    let newSimpsonsArray = [...data.simpsons]
                    console.log(newSimpsonsArray)

                   for (i=0; i<15; i++) {
 
                   if (userPerso.toUpperCase() === newSimpsonsArray[i].name) {
                        console.log(newSimpsonsArray[i].name)
                        document.querySelector("#name").innerHTML = data.simpsons[i].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[i].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[i].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[i].parent
                   }
                   }
                    }
                
   
            }
            
            fetch('../assets/data/dataSimpson.json')
            .then(response => response.json())
            .then(data => storeData(data))

        }
        inputFavouriteCharacter()
  
   
    }






