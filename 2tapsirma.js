function sheshui() {
    function san(promptText) {
        while(true) {
            let kiru = prompt(promptText);
            let num = parseFloat(kiru);
    
            if (!isNaN(num) && num >= 0) {
                return num;
            } else {
                alert("Qate, san engiz! ");
            }
        }
    }
    
    let zatbaga = san("Bir zat bagasi: ");
    let sani = san("Zat sani: ");
    let sheshu = zatbaga * sani;
    let jenildik = 0;
        
    if (sheshu > 20000) {
        jenildik = 30; 
    } else if (sheshu > 10000) {
        jenildik = 20; 
    } else if (sheshu > 5000) {
        jauap = 10; 
    }
    
    let discountAmount = (sheshu * jauap) / 100;
    let final = sheshu - discountAmount;
    
    alert(`
        Baga: ${sheshu.toFixed(2)}
        Janildik: ${jenildik}% (${discountAmount.toFixed(2)})
        Toleu kerek: ${final.toFixed(2)}
    `);
}
    
sheshui(); 

