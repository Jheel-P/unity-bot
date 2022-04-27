#pragma strict
var force:float=200;
function Update () {
var jet = GetComponent.<ParticleSystem>();
var jetsound = GetComponent.<AudioSource>();
if(Input.GetKey("q")){
GetComponent.<Rigidbody>().AddForce(Vector3.up*force);
jet.Play();
jetsound.Play();
}
if(Input.GetKeyUp("q")){
jet.Stop();
jetsound.Stop();
}
}
