#pragma strict
public var Heart1:GameObject;
public var Heart2:GameObject;
public var Heart3:GameObject;
public var Heart4:GameObject;
public var Heart5:GameObject;
public var Heart6:GameObject;
public var Heart7:GameObject;
public var Heart8:GameObject;
var ogposition:Vector3;
var counter:int=0;
function Start() {
ogposition= transform.position;
} 

function OnCollisionEnter2D (col : Collision2D)
{
    if(col.gameObject.tag == "enemy")
   		 {
    	counter+=1;
       	transform.position=ogposition;
     	 }
     	 
     		 if (counter == 1) 
     			 {
     			  Destroy(Heart8);
   				 }
    
    		if (counter == 2)
    			{ 
    			Destroy(Heart7);
    			}
    
    
   			 if (counter == 3) 
   				{
       			Destroy(Heart6);
      			}
       
        	if (counter == 4) 
   				{
       			Destroy(Heart5);
      			}
      			
       		 if (counter == 5) 
   				{
       			Destroy(Heart4);
      			}
      			
      			 if (counter == 6) 
   				{
       			Destroy(Heart3);
      			}
      			
      					 if (counter == 7) 
   				{
       			Destroy(Heart2);
      			}
      			
      					 if (counter == 8) 
   				{
       			Destroy(Heart1);
      			}
      			
      			
   			if (counter >= 8)
   				{ 
   				Destroy(gameObject);
   				}
	}

