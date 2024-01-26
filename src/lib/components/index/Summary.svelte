 <script>
	import myphoto from '$lib/images/myphoto.jpg';
 </script>

	<!-- Summary -->
	<!--
  Include features:
  - Profile Image
  - Name
  - Title: Software Developer
  - Short summary: Project Lead, Software Developer,
 -->
	<!-- Left section for image -->
	<div class="md:w-1/2 ">
		<figure class="relative">
			<img class="rounded-sm h-auto max-w-full transition-all duration-300 curose-pointer filter grayscale-0 hover:grayscale-[0.5]" src={myphoto} alt="myphoto" />
			<figcaption class="max-w-full min-w-full font-light text-center absolute px-4 text-lg text-white bottom-4">
				<p class="md:hidden">(try clicking on me)</p>
			</figcaption>
		</figure>
	</div>

	<!-- Right section for summary -->
	<div class="md:w-1/2 p-4 flex flex-col justify-center items-center">
		<h1 class="transition ease-in duration-100 transform hover:scale-110">HELLO THERE I AM</h1>
		<h1 class="text-5xl text-center font-medium leading-tight text-effect transition ease-in duration-200 transform hover:scale-110">OUDAMSITH SAMIN</h1>
		<p class="hover:scale-110 transition ease-in duration-100 transform">Full-stack developer</p>
		<!-- <div class="px-10">
			<div class="glitch-wrapper">
				<h1 class="glitch" data-text="HELLO I AM">HELLO I AM</h1>
			</div>
			<h1>Oudamsith Samin</h1>
			<p>Development, Project Management, System Analyst, Database Design</p>
		</div> -->
	</div>

<style lang="scss">
	$shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    $border: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    $bevel: 2px 2px 0 #999, -2px -2px 0 #fff;

	@mixin text-effect {
        text-shadow: $border, $shadow, $bevel;
    }

	.text-effect {
		@include text-effect;;
	}

	// .text-effect {
    //     text-shadow: 
    //         0 0 30px rgba(0, 0, 0, 0.8), /* shadow */
    //         -1px -1px 0 #000,  /* border */
    //         1px -1px 0 #000,   /* border */
    //         -1px 1px 0 #000,   /* border */
    //         1px 1px 0 #000,    /* border */
    //         1px 1px 0 #999,    /* bevel */
    //         -1px -1px 0 #fff;  /* bevel */
    // }
</style>