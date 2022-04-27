#pragma strict
var hitInfo:RaycastHit;
var other:GameObject;
var mis_joint:GameObject;
var o_missile:GameObject;
var miss_point:miss_motion;
var o_miss_point:o_miss_motion;
var rot:Vector3;
var point_indicators:GameObject[];
var missiles:GameObject[];
var e:int;
function Update () {
other=GameObject.Find("joint");
mis_joint=GameObject.Find("joint");
if(Input.GetKeyDown("j")){
rot=other.transform.rotation*Vector3(0,0,1);
if(Physics.Raycast(other.transform.position, rot, hitInfo)){
var point_indicator:GameObject=Instantiate(Resources.Load("point_indicator", typeof(GameObject)), hitInfo.point+(0.1*hitInfo.normal), Quaternion(0,0,0,0));
var missile:GameObject=Instantiate(Resources.Load("missile", typeof(GameObject)), mis_joint.transform.position, Quaternion(0,0,0,0));
miss_point=missile.GetComponent(miss_motion);
miss_point.point=hitInfo.point;
}
}
missiles=GameObject.FindGameObjectsWithTag("missile");
if(missiles.length==0){
point_indicators=GameObject.FindGameObjectsWithTag("point_indicator");
for(var i=0; i<point_indicators.length;i++){
Destroy(point_indicators[i]);
}
}
if(Input.GetKeyDown("m")){
rot=other.transform.rotation*Vector3(0,0,1);
if(Physics.Raycast(other.transform.position, rot, hitInfo)){
if(hitInfo.transform.gameObject.tag!="Terrain"){
o_missile=Instantiate(Resources.Load("o_missile", typeof(GameObject)), mis_joint.transform.position, Quaternion(0,0,0,0));
o_miss_point=o_missile.GetComponent(o_miss_motion);
o_miss_point.target=hitInfo.transform.gameObject;
}
}
}
if(GameObject.Find("o_missile(Clone)")=='NULL'){
e=1;
}
if(Input.GetKeyDown("k")){
o_missile=Instantiate(Resources.Load("o_missile", typeof(GameObject)), mis_joint.transform.position, Quaternion(0,0,0,0));
o_miss_point=o_missile.GetComponent(o_miss_motion);
o_miss_point.target=GameObject.Find("Sphere");
e=0;
}
}