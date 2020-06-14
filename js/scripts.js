let togle = 0;
function sidebar() {
  if(togle==1){
  	document.getElementById("sidebar").style.left="-271px";
  	document.getElementById("sideb").style.left="1%";
  	togle=0;
  }else{
  document.getElementById("sidebar").style.left="-1px";
  document.getElementById("sideb").style.left="290px"
  togle=1;
}
}