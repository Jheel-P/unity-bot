#pragma strict
var miss_point:miss_motion;
var vel:float=15;
var conpoint:Vector3;
var bulhead_pos:GameObject;

function OnTriggerEnter(other:Collider){
conpoint=other.ClosestPointOnBounds;
var point_indicator:GameObject=Instantiate(Resources.Load("point_indicator", typeof(GameObject)), conpoint, Quaternion(0,0,0,0));
var missile:GameObject=Instantiate(Resources.Load("missile", typeof(GameObject)), bulhead_pos.transform.position, Quaternion(0,0,0,0));
miss_point=missile.GetComponent(miss_motion);
miss_point.point=conpoint;
Destroy(gameObject);
}
function Update () {
bulhead_pos=GameObject.Find("joint");
GetComponent.<Rigidbody>().AddRelativeForce(Vector3(0,0,1)*vel);
}