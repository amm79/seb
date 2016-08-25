#pragma strict
var speed:float=3; 
var ogposition:Vector3;
function Start () {

}

function Update () {


 if(transform.position.x<151 && transform.position.x>151 && 
 transform.position.y>151 && transform.position.y>151 ){
  transform.position=ogposition;
 }

}