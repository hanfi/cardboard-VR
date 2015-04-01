Room3.prototype = Object.create(THREE.Object3D.prototype);
Room3.prototype.constructor = Room3;

function Room3(scene){
	THREE.Object3D.call(this);
	var room3 = this;
	

	
	
	

	
	this.photoSphere = new PhotoSphere(scene, 'images/mini-reu.jpg');
	
	this.remove = function(){
		this.photoSphere.remove();
		

		
		
		// remove self
		scene.removeRoom(this);
	}
	
}