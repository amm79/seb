#pragma strict
var speed:float=3; 
var ogposition:Vector3;
function Start () {
ogposition= transform.position;
}

function Update () {


 if(transform.position.y<-45){
  transform.position=ogposition;
 }

}