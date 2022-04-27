#pragma strict
var missile:GameObject;


function Update () {
if(Input.GetKeyDown("v")){
transform.localPosition = Vector3(0, 1.1, 0);
}
if(Input.GetKeyDown("b")){
transform.localPosition = Vector3(0, 1.1, -5);
}
if(Input.GetKeyDown(KeyCode.Mouse1)){
transform.localPosition = Vector3(0, 1.1, 0);
Camera.main.fieldOfView=5;
}
if(Input.GetKeyUp(KeyCode.Mouse1)){
transform.localPosition = Vector3(0, 1.1, -5);
Camera.main.fieldOfView=60;
}
if(Input.GetKey("z")){
missile=GameObject.Find("o_missile(Clone)");
transform.position=missile.transform.position;
transform.rotation=missile.transform.rotation;
}
if(Input.GetKeyUp("z")){
transform.localPosition = Vector3(0, 1.1, -5);
Camera.main.fieldOfView=60;
}
}