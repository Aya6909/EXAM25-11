function game() {
  const san = 24;
  let santap = +prompt("san tap");

  while (true) {
    if (santap == san) {
      alert("true");
    }
    if (santap < 0 && 100 > santap) {
      alert ("san 100 - 0")
      santap = +prompt("san tap");
    }
    if (santap > 0 && santap < 40) {
      alert("jogary jaz");
      santap = +prompt("san tap");
    } else if (santap > 50 && santap < 100) {
      alert("Жай томен сан жазщ");
      santap = +prompt("san tap");
    } else if (santap > 40 && santap < 45 ) {
      alert("Сәл жогары сан жазщ");
      santap = +prompt("san tap");
    } else if (santap > 45 && santap < 50) {
      alert("tomen jaz");
      santap = +prompt(" san tap");
    } 
  }
}
console.log(game());
