#pragma strict
 
var position2:Vector3;
function Start () {

}

function Update () {


 if(transform.position.x>137 && transform.position.x<145 && transform.position.y<2.3 && transform.position.y>0.6 ){
  transform.position=position2;
 }

}