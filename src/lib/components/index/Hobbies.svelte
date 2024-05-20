<script>
	import mecanny from '$lib/images/mecanny.png';
	import track1 from '$lib/images/track1.jpg';
	import track2 from '$lib/images/track2.jpg';
	import run1 from '$lib/images/run1.jpg';
	import run2 from '$lib/images/run2.jpg';
	import shoes from '$lib/images/shoes.jpg';
	import keeb1 from '$lib/images/keeb1.jpg';
	import keeb2 from '$lib/images/keeb2.jpg';
	import bike1 from '$lib/images/bike1.jpg';
	import bike2 from '$lib/images/bike2.jpg';
	import electric1 from '$lib/images/electric1.jpg';
	import electric2 from '$lib/images/electric2.jpg';
	import sim1 from '$lib/images/sim1.jpg';
	import sim2 from '$lib/images/sim2.jpg';
	import sim3 from '$lib/images/sim3.jpg';
</script>

<div class="flex gap-3 flex-wrap w-full">
	<h1 class="bg-blue-500 text-white text-center w-full font-bold text-4xl leading-5 mb-4 p-4">
		Hobbies
	</h1>

	<!-- gallery section -->
	<div class="flex flex-wrap justify-center w-full">
		<div class="md:basis-1/2 mb-4">
			<p class="mb-2 text-center">Motorsport: I love motorsport!!!</p>
			<div class="flex gap-4 flex-wrap justify-center">
				<img class="h-60 object-contain" src={track1} alt={track1} />
				<img class="h-60 object-contain" src={track2} alt={track2} />
			</div>
		</div>

		<div class="md:basis-1/2 mb-4">
			<p class="mb-2 text-center">DIY: I love DIY & 3D printing!!!</p>
			<div class="flex gap-4 flex-wrap justify-center">
				<img class="h-60 object-contain" src={electric1} alt={electric1} />
				<img class="h-60 object-contain" src={electric2} alt={electric2} />
			</div>
		</div>

		<div class="md:basis-1/2 mb-4">
			<p class="mb-2 text-center">Ergo keyboard:I love split keyboard and mechanical keyboard!!!</p>
			<div class="flex gap-4 flex-wrap justify-center">
				<img class="h-60 object-contain" src={keeb1} alt={keeb1} />
				<img class="h-60 object-contain" src={keeb2} alt={keeb2} />
			</div>
		</div>

		<div class="md:basis-1/2 mb-4">
			<p class="mb-2 text-center">5K running: I love 5k running just for fun!</p>
			<div class="flex gap-4 flex-wrap justify-center">
				<img class="h-60 object-contain" src={run1} alt={run1} />
				<img class="h-60 object-contain" src={shoes} alt={shoes} />
			</div>
		</div>

		<div class="md:basis-1/2 mb-4">
			<p class="mb-2 text-center">Sim Racing !!!</p>
			<div class="flex gap-4 flex-wrap justify-center">
				<img class="h-60 object-contain" src={sim1} alt={sim1} />
				<img class="h-60 object-contain" src={sim2} alt={sim2} />
			</div>
		</div>
	</div>
</div>
