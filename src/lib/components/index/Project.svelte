<script>
	import driverLicenseDetection from '$lib/images/myworks/driver license detection.png';
	import hullPointOnCard4 from '$lib/images/myworks/hull point on card 4 mod.png';
	import hullPointOnCard5  from '$lib/images/myworks/hull point on card 5 mod.png';
	import hullPointOnCard from '$lib/images/myworks/hull point on card mod.png';
	import hullPointOnCard3 from '$lib/images/myworks/hull point on card3 mod.png';
	import idCardDetection from '$lib/images/myworks/id card detection.png';
	import idCardRecognition from '$lib/images/myworks/id card recognition mod.jpg';
	import liensePlateDetection from '$lib/images/myworks/license plate detection.png';
	import parkingPhoto from '$lib/images/myworks/parking phot.jpg';
	import vaccinationCardRec from '$lib/images/myworks/vaccination card recognitioon and text detection mod.jpg';

	import systemDiagram from '$lib/images/myworks/system-diagram.jpg';

	// giff
	import speedDetectionGiff from '$lib/images/myworks/speed_detection_2.gif';
	import streamingProcessingGiff from '$lib/images/myworks/traffic_stream.gif';
	import parkingIot from '$lib/images/myworks/parking_iot.gif';
	import trafficViolationSimulation from '$lib/images/myworks/traffic_violation_simulation.gif';

	let works = [
		{
			'title': 'Custom Object Detection',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting the hull point on a given card. The project is developed using Python and OpenCV.',
			'image': hullPointOnCard3
		}, 
		{
			'title': 'Microservice Architecture',
			'description': 'This is a diagram of the microservice architecture that I have worked on.',
			'image': systemDiagram
		},

		{
			'title': 'Driver License Detection',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting driver license from a given image. The project is developed using Python and OpenCV.',
			'image': driverLicenseDetection
		}, 
		{
			'title': 'IoT Parking System',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting parking lot from a given image. The project is developed using Python and OpenCV.',
			'image': parkingIot
		}, 
		{
			'title': 'Traffic Violation Simulation in Unity',
			'description': 'This project is about processing the video stream from a live feed camera. The feed then buffered through FFMPEG server and processed to detect the speed of a vehicle.',
			'image': trafficViolationSimulation
		}, 
		{
			'title': 'Streaming Processing Server',
			'description': 'This project is about processing the video stream from a live feed camera. The feed then buffered through FFMPEG server and processed to detect the speed of a vehicle.',
			'image': streamingProcessingGiff
		}, 
		{
			'title': 'Card Orientation Detection',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting the hull point on a given card. The project is developed using Python and OpenCV.',
			'image': hullPointOnCard5
		}, 
		{
			'title': 'ID Card Text Recognition',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about recognizing the text from a given image. The project is developed using Python and OpenCV.',
			'image': idCardRecognition
		}, 
		{
			'title': 'ID Card Detection',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting ID card from a given image. The project is developed using Python and OpenCV.',
			'image': idCardDetection
		}, 
		{
			'title': 'Mobile Parking App',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting parking lot from a given image. The project is developed using Python and OpenCV.',
			'image': parkingPhoto
		}, 
		{
			'title': 'Vaccination Card Detection & OCR',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about recognizing the text from a given image. The project is developed using Python and OpenCV.',
			'image': vaccinationCardRec
		}, 
		{
			'title': 'Speed Detection',
			'description': 'This is a project that I have worked on during my time at Clik. The project is about detecting the speed of a vehicle from a given video. The project is developed using Python and OpenCV.',
			'image': speedDetectionGiff
		}, 
	];
</script>

<div class="flex gap-3 flex-wrap">

	<h1 class="bg-blue-500 text-white  text-center w-full font-bold text-4xl leading-5 mb-4 p-4">My Works</h1>

	<article class="text-white w-full">
		<p>I have worked on many projects. These are some of my works that I try to visualize and put on display.</p>
	</article>

	<!-- Cards of work -->
	<div class="flex flex-wrap gap-3 justify-around">
		{#each works as work (work.title)}
			<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm rounded overflow-hidden shadow-lg">
				<div class="h-48 flex items-center bg-gray-600 overflow-hidden">
					<img class="w-full h-full object-scale-down" src={work.image} alt={work.title}>
				</div>
				<div class="h-full px-6 py-4 bg-black">
					<div class="font-bold text-xl mb-2">{work.title}</div>
					<!-- <p class="text-white text-base">
						{work.description}
					</p> -->
				</div>
			</div>
		{/each}
	</div>

</div>