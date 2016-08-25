public var liveswhite1:GameObject;
public var liveswhite2:GameObject;
public var liveswhite3:GameObject;
var counter:int=0;
function OnCollisionEnter (col : Collision)

{
    if(col.gameObject.name == "singlespike_rock")
    {
    Debug.Log(counter);
     counter+=1;
     Debug.Log(counter);
       
      if (counter == 1) 
      {//(gameObject);
       Destroy(liveswhite1);
    }
    if (counter==2)
    { Destroy(liveswhite2);
    }
    if (counter == 3) 
    {
       Destroy(liveswhite3);}
   if (counter == 3)
   { 
   Destroy(gameObject);
   Debug.Log(counter);
   }
   }
   }
