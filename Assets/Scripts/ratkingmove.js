#pragma strict
var speed:float=3; 
var ogposition:Vector3;
function Start () {

}

function Update () {


 if(transform.position.x<214){
  transform.Translate(Vector3.right * speed * Time.deltaTime);
  
 }

if(transform.position.x>240){
  transform.Translate(Vector3.left * speed * Time.deltaTime);
   
 }


}