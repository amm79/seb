#pragma strict

var ogposition:Vector3;
function Start () {
	ogposition= transform.position;
}

function Update () {
	
	
	if(transform.position.y<-25){
		transform.position=ogposition;
	}
	
}