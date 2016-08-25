#pragma strict
var speed:float=3; 
var ogposition:Vector3;
function Start () {

}

function Update () {

transform.Translate(Vector3.left * speed * Time.deltaTime);
 if(transform.position.x<98){
  transform.position=ogposition;
 }

}