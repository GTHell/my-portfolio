 <script>
	import mycv from '$lib/images/cv.pdf';
	import mecanny from '$lib/images/mecanny.png';
 </script>

	<!-- About Me -->
	<!-- - Location,
  - Social Media Links
  - Resume Link
  - Email -->
  <div class="flex gap-3 flex-wrap">
	<!-- <h1 class="underline-offset-8 underline text-center md:text-left  w-full font-bold text-3xl leading-5 mb-4">About</h1> -->
	<h1 class="bg-blue-500 text-white  text-center  w-full font-bold text-4xl leading-5 mb-4 p-4">About Me</h1>

	<!-- About me section -->
	<div class="flex flex-wrap gap-12 mb-4">
		<div class="md:flex-1">
			<article class="prose text-white font-normal">
				<!-- <p class="">
					I am one of a kind of a developer. Most of the time no one going to figure out that I know anything about technology at all.
				</p>
				<p class="">I do both frontend and backend but I prefer backend because of the thing being abstract and always, I, in awe when each module connected to each other and work flawlessly even though no one can visualize how it work on a higher level.
					That is the beauty I enjoy about backend development.
				</p> -->
				<p>I’m a unique developer who enjoys both frontend and backend development. 
					However, I prefer backend development because of its abstract nature. 
					I’m always in awe when each module connects to each other and works flawlessly, 
					even though no one can visualize how it works on a higher level. That’s the beauty of backend development!</p>
				<p>I am also into different kind of thing include computer vision, machine learning, DevOps, and general problem-solving in general. 😊</p>
				<p class="bg-gray-900 border-l-4 p-2 underline mb-4">.flex.flex-wrap.gap-4>.md:flex-1*2</p>
				<p class="text-justify">Beside doing all the technical stuff just to survive, I also into auto racing. Be it Formula 1 or MotoGP. I used to be into play electric guitar playing to all Metallica songs. I'm not a bookworm but I like reading a lot books.</p>
			</article>
		</div>

		<div class="md:flex-1">
			<img class="object-cover" src={mecanny} alt="">
		</div>
	</div>

	<div class="flex flex-wrap gap-6 md:gap-4">
		<!-- Download CV button -->
		
		<div class="flex-initial">
			<a href={ mycv } download="Oudamsith Samin CV Application.pdf" class=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center">
				<svg class="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
				<span>Download CV</span>
			</a>
		</div>

		<div class="">
			<!-- <a target="_blank" href="https://web.facebook.com/sith.sith.sith.sith.sith" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
				<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
					<path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
				</svg>
				My FB
			</a> -->

			<!-- Instagram -->
			<!-- <a target="_blank" href="https://www.instagram.com/sith__sam_/" type="button" class="text-white bg-slate-700 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
				<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="currentColor"
				style="color: #c13584"
				viewBox="0 0 24 24">
				<path
					d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
				</svg>
			</a> -->
		
			<!-- Github -->
			<a target="_blank" href="https://github.com/gthell" type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
				</svg>
			</a>

			<!-- Stackoverflow -->
			<a target="_blank" href="https://stackoverflow.com/users/6008656/gthell" type="button" class="text-white bg-[#6b5724]/70 hover:bg-[#6b5729]/50 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 mb-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="currentColor"
					style="color: #f48024"
					viewBox="0 0 24 24">
					<path
						d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
				</svg>
			</a>

			<!-- linkedin -->
			<a target="_blank" href="https://www.linkedin.com/in/oudamsith-samin-654189140/" type="button" class="text-white bg-[#0a66c2] hover:bg-[#0a66c2]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 mb-2">
				<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 24 24">
				<path
					d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
				</svg>
			</a>

			<!-- Telegram -->
			<a target="_blank" href="https://t.me/psith007" type="button" class="text-white bg-slate-700 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
				<svg
				class="h-5 w-5"
				fill="currentColor"
				viewbox="0 0 24 24"
				style="color: #0088cc"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				xmlns:serif="http://www.serif.com/"
				>
				<path
					id="telegram-1"
					d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
				</svg>
			</a>

			<!-- Facebook -->
			<a target="_blank" href="https://web.facebook.com/sith.sith.sith.sith.sith"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
					<path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
				</svg>
			</a>

			<!-- Tiktok -->
			<a target="_blank" href="https://www.tiktok.com/@siths510" type="button" class="text-white bg-gradient-to-br from-[#00f2ea] to-[#ff0050]   hover:from-[#00f2ea]/80 hover:to-[#ff0050]/80  focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 mb-2">
				<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="250px" height="250px">    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/></svg>
			</a>

		</div>
		<!-- Social media link -->
	</div>

	<!-- Highlight -->
	<div class="flex md:w-1/2 mb-4 gap-4">
		<div class="flex max-w-[160px] p-2 justify-around bg-gray-900 text-white">
			<div class="text-5xl font-semibold">6</div>
			<div class="w-[50%] text-l">Years of experience</div></div>
		<div class="flex max-w-[160px] p-2 justify-around bg-gray-900 text-white">
			<div class="text-5xl font-semibold">10+</div>
			<div class="w-[50%] text-l">Project Done</div></div>
	</div>
</div>