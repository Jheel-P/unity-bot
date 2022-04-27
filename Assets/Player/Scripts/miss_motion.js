#pragma strict
public var point:Vector3;
var miss_force:float=200;
var j_force:float=100;
var accel:float=0;
private var k:int=0;
private var r_vel:Vector3;
private var i:int=0;
private var bulhead_pos:GameObject;
private var conpoint:Vector3;

function OnCollisionEnter(other:Collision){
if(other.gameObject.name !="missile"){
conpoint=other.contacts[0].point;
var exp:GameObject=Instantiate(Resources.Load("mis_exp", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
var smoke:GameObject=Instantiate(Resources.Load("mis_smoke", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
Destroy(gameObject);
}
}

function Update () {
bulhead_pos=GameObject.Find("mis_joint");
if(k==0){
transform.position=Vector3(bulhead_pos.transform.position.x, bulhead_pos.transform.position.y, bulhead_pos.transform.position.z);
}
if(Input.GetKeyDown("r")){
k=1;
}
if(k==1){
var jet = GetComponent.<ParticleSystem>();
jet.Play();
var jetsound = GetComponent.<AudioSource>();
jetsound.Play();
if(i<=60){
jet.shape.rotation=Vector3(0,0,0);
transform.LookAt(point);
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
if(((transform.position-point).magnitude)>1){
transform.LookAt(point);
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

