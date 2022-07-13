function grade(number) {
  let num = number;
  let result = "";
  if (num >= 90) {
    result = "A";
  } else if (num <= 89 && num >= 80) {
    result = "B";
  } else if (num <= 79 && num >= 70) {
    result = "C";
  } else if (num <= 69 && num >= 60) {
    result = "D";
  } else if (num <= 59) {
    result = "E";
  }

  console.log(result);
}
grade(92);
grade(2);
