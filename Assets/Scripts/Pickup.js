#pragma strict

function OnCollisionEnter2D (col : Collision2D)
{
    if(col.gameObject.tag == "Player")
   		 {
   		 
    	 Destroy(gameObject);
     	 }
     	 }