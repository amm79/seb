public var score : int = 0; 
var mySkin : GUISkin;

function OnCollisionEnter2D (col : Collision2D)
 {  
 if(col.gameObject.tag == "heart")
 { 
 score += 5; 
 } 
  
 }

function OnGUI () 
{ 
GUI.skin = mySkin; 
GUI.color = Color.red;
GUI.Label (Rect (10, 10, 500, 200), score.ToString()); 

}