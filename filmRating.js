function filmRating(usia) {
  let num = usia;
  let result = "";
  if (num >= 21) {
    result = "DEWASA";
  } else if (num >= 13) {
    result = "REMAJA";
  } else if (num >= 9) {
    result = "BIMBINGAN ORANG TUA";
  } else if (num < 9) {
    result = "SEMUA USIA";
  }

  console.log(result);
}
filmRating(10);
filmRating(17);
