#pragma strict
var j_force:float=200;
var accel:float=0;
private var k:int=0;
private var bulhead_pos:GameObject;
public var target:GameObject;
private var conpoint:Vector3;
private var r_vel:Vector3;
private var i:int=0;

function Start(){
}

function OnCollisionEnter(other:Collision){
conpoint=other.contacts[0].point;
var exp:GameObject=Instantiate(Resources.Load("o_mis_exp", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
var smoke:GameObject=Instantiate(Resources.Load("mis_smoke", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
Destroy(gameObject);
}

function Update () {
if(k==0){
bulhead_pos=GameObject.Find("mis_joint");
transform.position=Vector3(bulhead_pos.transform.position.x, bulhead_pos.transform.position.y, bulhead_pos.transform.position.z);
}
if(Input.GetKeyDown("h")){
k=1;
}
if(k==1){
var jet = GetComponent.<ParticleSystem>();
jet.Play();
var jetsound = GetComponent.<AudioSource>();
jetsound.Play();
if(i<=60){
jet.shape.rotation=Vector3(0,0,0);
transform.LookAt(target.transform.position);
GetComponent.<Rigidbody>().useGravity=false;
GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward*(-0.25)*j_force);
}
if(i>60&&i<130){
jet.shape.rotation=Vector3(0,180,0);
transform.rotation.eulerAngles=Vector3(90,0,0);
GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward*(-4)*j_force);
}
if(i>60){
GetComponent.<Rigidbody>().useGravity=true;
}
if(i>=400){
jet.shape.rotation=Vector3(0,180,0);
GetComponent.<Rigidbody>().useGravity=false;
if(((transform.position-target.transform.position).magnitude)>1){
transform.LookAt(target.transform.position);
transform.Translate(Vector3.forward*(0.05+accel));
accel=accel+0.001;
}
else{
GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward*10*j_force);
}
}
i++;
}
}

