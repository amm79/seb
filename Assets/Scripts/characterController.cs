using UnityEngine;
using System.Collections;

public class characterController : MonoBehaviour 
{
	private float distToGround = 0F;
	public float maxSpeedHori = 10F;
	public float maxSpeedVert = 5F;
	bool facingRight = true;
	public bool grounded = true;
	//public Animator anim;
	public float jumpForce = 10000f;
	public enum State{
		idle = 0,
		run = 1,
		jump = 2,
	}
	public State currentState = State.idle;
	
	bool IsGrounded(){
   		return Physics2D.Raycast(transform.position, -Vector3.up, distToGround + .4f);
 	}
	
	void Start () 
	{
		distToGround = collider2D.bounds.extents.y;
	}
	
	void FixedUpdate () 
	{
		
		
		float moveHori = Input.GetAxis ("Horizontal");
		if (moveHori != 0){
			currentState = State.run;
		}
		float moveVert = Input.GetAxis ("Vertical");
		if (moveVert != 0){
			currentState = State.run;
		}
		rigidbody2D.velocity = new Vector3(moveHori * maxSpeedHori, rigidbody2D.velocity.y);
		
		if(moveHori > 0 &&!facingRight)
			Flip ();
		else if(moveHori <0 && facingRight)
			Flip ();
		
		if (moveVert == 0 && moveHori == 0){
			currentState = State.idle;
		}
		
		
		
		if (!IsGrounded()){
			grounded = false;
			currentState = State.jump;	
		}
		if (IsGrounded()){
			grounded = true;
		}
	}
	
	void Update()
	{
		if (IsGrounded() && Input.GetKeyDown (KeyCode.UpArrow)) 
		{
			rigidbody2D.AddForce (new Vector3(0,jumpForce));
		}
		
		//anim.SetInteger("stateParameter", (int)currentState);
	}
	
	void Flip()
	{
		facingRight = !facingRight;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
}
