a = b = c = 0;
for (i = 1 ; i < 101 ; i++){
  a++;
  b++;
  c++;
  if(a == 15){
    console.log("BizzFizz");
    a = b = c = 0;
  }
  else if(b == 5){
    console.log("Fizz");
    b = 0;
  }
  else if(c == 3){
    console.log("Bizz");
    c = 0;
  }
  else{
    console.log(i);
  }
}