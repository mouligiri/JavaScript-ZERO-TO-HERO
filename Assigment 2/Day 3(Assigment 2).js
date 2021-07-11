s = "madam met mom and dad";
w = "";
r = "";
s = s+" ";
for(i of s){
  if(i != ' '){
    w = i+w;
    r = r+i;
  }
  else{
    if(w == r){
      console.log(w);
    }
    w = "";
    r = "";
  }
}