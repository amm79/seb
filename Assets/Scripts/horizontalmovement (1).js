#pragma strict
var speed:float=3; 
var ogposition:Vector3;
function Start () {
ogposition= transform.position;
}

function Update () {


 if(transform.position.y<-24)
 {
  transform.position=ogposition;
 }

}