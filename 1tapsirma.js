function calculator(){
    function sanengiz(promptText){
        while(true){
            let kiru = prompt(promptText);
            let san = parseFloat(kiru);

            if(!isNaN(san)){
                return san;
            }else{
                alert( "Қате енгізу!");
            }
        }
    }

    let num1 = sanengiz("Birinshi sandi engiz: ");
    let num2 = sanengiz("Ekinshi sandi engzi: ");

    let qosu = num1 + num2;
    let azaytu = num1 - num2;
    let kobetu = num1 * num2;
    let bolu = num1 / num2;
    
    alert(` Cauap: 
            ${num1} + ${num2} = ${qosu}
            ${num1} - ${num2} = ${azaytu}
            ${num1} * ${num2} = ${kobetu}
            ${num1} / ${num2} = ${bolu}
        `)
}

calculator();