let userChoise = prompt(`Qog'gz, qaychi, tosh qaysi birini tanlaysiz` ).toLowerCase()

function gameFunksion() {
const computerPlay =["tosh", "qaychi", "qogoz" ];

let randomNum = Math.floor(Math.random() * 3)
    let committerChoice = computerPlay[randomNum]
    console.log( "Kompiuter:", committerChoice)

    function users() {
        if( userChoise === "tosh" ||  userChoise === "qaychi" || userChoise === "qogoz"){
            return userChoise
        }else {
            alert( "Siz mavjud bo'lmagan xolatni kirgizdingiz")
            window.location.reload(true);
        }
    };
    users();
    let compare = function (choise1, choise2) {
        if (choise1 == choise2){
            return "Natijalar bir xil"
        }
        else if(choise1 == "tosh"){
            if (choise2 == "qaychi") {
               return  "Tabriklaymiz Tosh yutdi"
            } else {
                return "yutqazdingiz"
            }
        }
        else if(choise1 == "qogoz"){
            if(choise2 == "tosh"){
                return "Afsus Qaychi yutdi"
            }else {return "Tabriklaymiz qog'oz yutdi"}
        }
        else if(choise1 == "qaychi"){
            if(choise2 == "qogoz"){
                return "Tabriklaymiz qaychi yutdi"
            }else {
                return "Afsus qog'oz yutdi"
            }
        }
    };
    console.log( "Foydalanuvchi:", userChoise)
    console.log(compare(userChoise, committerChoice))
}
    gameFunksion();

