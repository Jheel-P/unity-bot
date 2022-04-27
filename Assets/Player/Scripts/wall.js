#pragma strict
var cube:GameObject;
var i:int;
var j:int;
var start:GameObject;

function Start () {
start=GameObject.Find("Cube");
for(j=0;j<10;j++){
for(i=0;i<50;i++){
var cube:GameObject=Instantiate(Resources.Load("brick", typeof(GameObject)), Vector3(start.transform.position.x,start.transform.position.y+0.3*j,start.transform.position.z+0.8*i), Quaternion(0,0,0,0));
}
}
}

function Update () {
}