#pragma strict
var vel:float=5;
var conpoint:Vector3;

function OnCollisionEnter(other:Collision){
conpoint.Set(other.contacts[0].point.x, other.contacts[0].point.y, other.contacts[0].point.z);
var exp:GameObject=Instantiate(Resources.Load("exp", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
var smoke:GameObject=Instantiate(Resources.Load("smoke", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
Destroy(gameObject);
}
function Update () {
transform.Translate(Vector3(0,0,1)*vel);
}