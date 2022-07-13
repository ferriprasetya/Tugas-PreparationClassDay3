function ganjilGenap(number) {
  let num = number;
  let result = "";
  if (num % 2 === 0) {
    result = "Genap";
  } else {
    result = "Ganjil";
  }

  console.log(result);
}
ganjilGenap(13);
ganjilGenap(2);
