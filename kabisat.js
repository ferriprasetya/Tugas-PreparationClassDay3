function kabisat(number) {
  let num = number;
  let result = "";
  if (num % 4 === 0) {
    result = "Kabisat";
  } else {
    result = "Bukan Kabisat";
  }

  console.log(result);
}
kabisat(2013);
kabisat(2004);
