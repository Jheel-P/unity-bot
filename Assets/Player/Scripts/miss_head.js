#pragma strict
var other:GameObject;
function Update () {
other=GameObject.Find("mis_joint");
if(Input.GetKeyDown("j")){
var mis_point:GameObject=Instantiate(Resources.Load("miss_point",typeof(GameObject)), Vector3(other.transform.position.x, other.transform.position.y, other.transform.position.z), Quaternion(other.transform.rotation.x, other.transform.rotation.y, other.transform.rotation.z, other.transform.rotation.w));
}
}
