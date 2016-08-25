#pragma strict
  
 var paused : boolean;
 var guiEl : String = "Mute";
 var Mute : boolean;
 var guiSkin : GUISkin;
 var pauseKey : String = "Tab";
  var font : Font;
 
 var guiStyle : GUIStyle;
  
 function Start () {
  
 }
  
 function Update () {
  
     if(Input.GetKeyDown(pauseKey)){
          paused = !paused;
        }
  
        if(paused)
          Time.timeScale = 0;
        else
          Time.timeScale = 1;
  
  
          if (Mute == true){     
        AudioListener.pause = true;
     }
     else{
       AudioListener.pause = false;
}
 }
  
 // JavaScript
 var icon : Texture2D;
  
 //var frameStyle : GUIStyle;
  
 function OnGUI () {
  
        GUI.skin = guiSkin;
  
     if(paused){
  
 //   GUI.Box (Rect (10,10, 100, 50), icon, frameStyle);
   
  
        if (GUI.Button (Rect (Screen.width/2 - 100,Screen.height/3 - 120, 200, 100), "Menu")) {
          Application.LoadLevel("Menu");
               Time.timeScale = 1;
        }
  
        if (GUI.Button (Rect (Screen.width/2 - 100,Screen.height/3, 200,100), "Restart")) {
          Application.LoadLevel(Application.loadedLevel);
               Time.timeScale = 1;
        }
  if(GUI.Button (Rect (Screen.width/2 - 100,Screen.height/3 + 240, 200,100), "Quit")){
         Application.Quit();}
         
        if (GUI.Button (Rect (Screen.width/2 - 100,Screen.height/3 + 120,200,100), guiEl)) {
          if (guiEl == "Mute"){
          guiEl = "Unmute";
          Mute = true;
          }
  
          else{
          guiEl = "Mute";
          Mute = false;
          
          var font : Font;
          }
 
    
    
 }
          }
        }
     