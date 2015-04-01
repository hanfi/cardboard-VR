Room4.prototype = Object.create(THREE.Object3D.prototype);
Room4.prototype.constructor = Room4;

function Room4(scene){
	THREE.Object3D.call(this);
	var room4 = this;
	
	
	this.hotspotToRoom3 = new Hotspot(scene, {
		rectLength: 4, 
		rectWidth: 4, 
		degree: 130,
		verticalDegree: 0,
		radius: 5 * SCALE,
		showHotspot: scene.showHotspots,
		onFocus: function(){
				// remove the room
				room4.remove();
				// Start a new room
				var room = new Room3(scene);
				scene.add(room);
		}
	});
	
	
	
	this.photoSphere = new PhotoSphere(scene, 'images/bureau.jpg', {  depth: 110 });
	
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(100, 32, 32),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF, transparent: true, opacity: 0.25
		})
	);
	
	/*
	// Invert the mesh inside-out
	sphere.scale.x = -1;
	this.sphere = sphere;
	scene.add(sphere);
	
	this.photoSphere2 = new PhotoSphere(scene, 'images/cloud.png', {  transparent: true});
	*/
	
	this.remove = function(){
		this.photoSphere.remove();
		this.hotspotToRoom3.remove();
		
		
		// remove self
		scene.removeRoom(this);
	}
	
}