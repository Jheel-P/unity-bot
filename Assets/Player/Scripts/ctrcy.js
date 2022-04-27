#pragma strict

function Start () {

}

function Update () {
var other:GameObject;
other=GameObject.Find("Sphere");
transform.position=Vector3(other.transform.position.x,other.transform.position.y + 1, other.transform.position.z );
}