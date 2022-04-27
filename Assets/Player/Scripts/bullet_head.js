#pragma strict

function Update () {
var bulhead_pos:GameObject;
bulhead_pos=GameObject.Find("Capsule");
transform.position=Vector3(bulhead_pos.transform.position.x, bulhead_pos.transform.position.y + 1.1, bulhead_pos.transform.position.z );
if(Input.GetKeyDown(KeyCode.Mouse0)||Input.GetMouseButton(0)||Input.GetKeyDown("f")){
var other:GameObject;
other=GameObject.Find("joint");
var bullet:GameObject=Instantiate(Resources.Load("bullet",typeof(GameObject)), Vector3(other.transform.position.x, other.transform.position.y, other.transform.position.z), Quaternion(other.transform.rotation.x, other.transform.rotation.y, other.transform.rotation.z, other.transform.rotation.w));
}
}		