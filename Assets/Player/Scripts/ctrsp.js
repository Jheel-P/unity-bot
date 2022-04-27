#pragma strict
private var grounded:boolean=false;
private var normal:Vector3;
private var movdir:Vector3;
var j_force:float=500;
var vel:float=0.3;
var a_vel:float=0.5;
var r_vel:float=0.2;
var r_a_vel:float=0.4;
function OnCollisionEnter(coll:Collision){
if(coll.gameObject.name=="Base"){
grounded=true;
if(coll.contacts.Length==1){
normal=coll.contacts[0].normal;}
if(coll.contacts.Length>=1){
if(coll.contacts.Length%2==0){
normal=coll.contacts[(coll.contacts.Length/2)-1].normal;}
else{
normal=coll.contacts[(coll.contacts.Length-1)/2].normal;}
}}}

function OnCollisionExit(coll:Collision){
grounded=false;
normal.Set(0,1,0);}

function Update () {
if(Input.GetKey("d")){
if(Input.GetKey(KeyCode.LeftShift)){
movdir.Set(1, 0, 0);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*(a_vel));}
else{
movdir.Set(1, 0, 0);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*(vel));}
}
if(Input.GetKey("a")){
if(Input.GetKey(KeyCode.LeftShift)){
movdir.Set(-1, 0, 0);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*(a_vel));}
else{
movdir.Set(-1, 0, 0);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*(vel));}
}
if(Input.GetKey("w")){
if(Input.GetKey(KeyCode.LeftShift)){
movdir.Set(0, 0, 1);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*(a_vel));}
else{
movdir.Set(0, 0, 1);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*(vel));}
}
if(Input.GetKey("s")){
if(Input.GetKey(KeyCode.LeftShift)){
movdir.Set(0, 0, -1);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*r_a_vel);}
else{
movdir.Set(0, 0, -1);
movdir.y=movdir.magnitude*Mathf.Tan((Mathf.Acos(normal.y/normal.magnitude)));
transform.Translate(movdir*r_vel);}
}
if(grounded){
if(Input.GetKeyDown(KeyCode.Space)){
GetComponent.<Rigidbody>().AddForce(Vector3.up*j_force);
}}
}










