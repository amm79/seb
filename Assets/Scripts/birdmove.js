#pragma strict
var speed:float=3; 
var ogposition:Vector3;
function Start () {
ogposition= transform.position;
}

function Update () {

transform.Translate(Vector3.left * speed * Time.deltaTime);
 if(transform.position.x<52){
  transform.position=ogposition;
 }

}