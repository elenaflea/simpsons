

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
                console.log(userPerso)
                if (userPerso){

                    if (userPerso.toUpperCase() === "LISA") {
                        document.querySelector("#name").innerHTML = data.simpsons[0].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[0].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[0].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[0].parent
                    }
                    else if (userPerso.toUpperCase() === "BART") {
                        document.querySelector("#name").innerHTML = data.simpsons[1].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[1].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[1].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[1].parent
                    }

                    else if (userPerso.toUpperCase() === "MAGGIE") {
                        document.querySelector("#name").innerHTML = data.simpsons[2].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[2].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[2].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[2].parent
                    }
                    else if (userPerso.toUpperCase() === "PATTY") {
                        document.querySelector("#name").innerHTML = data.simpsons[3].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[3].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[3].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[3].parent
                    }
                    else if (userPerso.toUpperCase() === "SELMA") {
                        document.querySelector("#name").innerHTML = data.simpsons[4].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[4].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[4].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[4].parent
                    }
                    else if (userPerso.toUpperCase() === "ROD") {
                        document.querySelector("#name").innerHTML = data.simpsons[5].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[5].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[5].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[5].parent
                    }
                    else if (userPerso.toUpperCase() === "TODD") {
                        document.querySelector("#name").innerHTML = data.simpsons[6].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[6].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[6].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[6].parent
                    }
                    else if (userPerso.toUpperCase() === "ABE") {
                        document.querySelector("#name").innerHTML = data.simpsons[7].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[7].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[7].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[7].parent
                    }
                    else if (userPerso.toUpperCase() === "MONA") {
                        document.querySelector("#name").innerHTML = data.simpsons[8].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[8].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[8].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[8].parent
                    }
                    else if (userPerso.toUpperCase() === "JACQUELINE") {
                        document.querySelector("#name").innerHTML = data.simpsons[9].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[9].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[9].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[8].parent
                    }
                    else if (userPerso.toUpperCase() === "HOMER") {
                        document.querySelector("#name").innerHTML = data.simpsons[10].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[10].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[10].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[10].parent
                    }
                    else if (userPerso.toUpperCase() === "MARGE") {
                        document.querySelector("#name").innerHTML = data.simpsons[11].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[11].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[11].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[11].parent
                    }
                    else if (userPerso.toUpperCase() === "NED") {
                        document.querySelector("#name").innerHTML = data.simpsons[12].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[12].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[12].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[12].parent
                    }
                    else if (userPerso.toUpperCase() === "APU") {
                        document.querySelector("#name").innerHTML = data.simpsons[13].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[13].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[13].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[13].parent
                    }
                    else if (userPerso.toUpperCase() === "MANJULA") {
                        document.querySelector("#name").innerHTML = data.simpsons[14].name
                        document.querySelector("#age").innerHTML = "Age : " + data.simpsons[14].age
                        document.querySelector("#hair").innerHTML = "Hair : " + data.simpsons[14].hair
                        document.querySelector("#parent").innerHTML = "Parents : " + data.simpsons[14].parent
                    }
                    else {
                        document.querySelector("#name").innerHTML = "No information about " + userPerso.toUpperCase()
                        document.querySelector("#age").innerHTML = ""
                        document.querySelector("#hair").innerHTML = ""
                        document.querySelector("#parent").innerHTML = ""
                }
                    }
                
   
            }
            
            fetch('../assets/data/dataSimpson.json')
            .then(response => response.json())
            .then(data => storeData(data))

        }
        inputFavouriteCharacter()
  
   
    }






