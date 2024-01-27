 <script>
	/**
	 * @param {string | undefined} dimension
	 */
	function getDimension(dimension) {
		const default_value = '10';
		return dimension ? dimension : default_value;
	
	}
	// language I know and admire to use in the future
  let languages = [
    {name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"},
    {name: "Javascript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"},
    {name: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"},
    {name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"},
    {name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg"},
    {name: "Rust", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"},
	{name: "Go", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"},
	{name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"},
	{name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg"},
	{name: "Clojure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg"},
	{name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"},
 ]

	// technology I used
  let technology_used = [
    {name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"},
    {name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
    {name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"},
    {name: "ASP.NET", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg"},
    {name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"},
    {name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "Vuejs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},
    {name: "Tailwindcss", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
    {name: "Svelt", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg"},
	{name: "Dapr", w: '12', h: '12', img: "https://www.vectorlogo.zone/logos/daprio/daprio-ar21.svg"},
	{name: "Vim", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg"},
	{name: "OpenCv", w: "[3.5rem]", img:"https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg"},
	{name: "Tensorflow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
	{name: "OpenVino",w: "12", img: "https://raw.githubusercontent.com/valohai/ml-logos/master/openvino-2.svg"},
	{name: "Traefik", w: "10", h: "10", img: "https://www.vectorlogo.zone/logos/traefikio/traefikio-icon.svg"},
  ];

</script>

<div class="flex flex-col gap-4">
	<!-- <h1 class="underline-offset-8 underline text-center md:text-left  w-full font-bold text-3xl leading-5 mb-4">Skills</h1> -->
	<h1 class="bg-blue-500 text-white  text-center  w-full font-bold text-4xl leading-5 mb-4 p-4">Skills</h1>
	<div class="w-full mb-2">

		<article class="text-white font-normal">
			<p>I don't have much of a preference for a language. I find each language to be best fitted suit for its use case. I mainly use Python because 
				it's versaltile and getting I want done faster. Although, I prefer Javascript for its TypeScript, I don't think it has enough tools to do most of the stuff that I want.</p>
		</article>
	</div>
	<div class="border-t border-gray-200 my-4"></div>

	<!--  progress bar -->
	<!-- <div class="w-1/2 p-4">
		<div class="w-full mb-4 h-2.5 bg-gray-200 rounded-full">
			<div class="h-full text-center text-xs text-white bg-teal-600 rounded-full w-[80%]"></div>
		</div>
		<div class="w-full mb-4 h-2.5 bg-gray-200 rounded-full">
			<div class="h-full text-center text-xs text-white bg-teal-600 rounded-full w-[80%]"></div>
		</div>
	</div> -->
	<div class="md:flex w-full mb-8">
		<div class="flex justify-center items-center md:w-1/4 mb-2 pr-1 md:border-r-2">
			<p>Here are languages I know and use professionally and casually with.</p>
		</div>
		<ul class="md:w-full flex flex-wrap justify-center">
			{#each languages as skill (skill.name)}
				<li class="flex flex-col items-center mb-4 px-2.5 py-0.5 min-w-50">
					<span>{ skill.name }</span>
					<img class={`${skill.w ? `w-${skill.w}` : 'w-10'} ${skill.h ? `h-${skill.h}` : 'h-10'}`} alt="svg-skill" src={skill.img} />
				</li>
			{/each}
		</ul>
	</div>
	<div class="md:flex w-full mb-4">
		<div class="flex justify-center items-center md:w-1/4 mb-2 pr-1 md:border-r-2">
			<p>Here are tools and frameworks I use to make development problem solving easier and faster.</p>
		</div>	
		<ul class="md:w-full flex flex-wrap justify-center">
			{#each technology_used as skill (skill.name)}
				<li class="flex flex-col items-center mb-4 px-2.5 py-0.5 min-w-50">
					<span>{ skill.name }</span>
					<!-- <div class="w-10 h-10"> -->
					<img class={`${skill.w ? `w-${skill.w}` : 'w-10'} ${skill.h ? `h-${skill.h}` : 'h-10'}`} alt="svg-skill" src={skill.img} />
				</li>
			{/each}
		</ul>
	</div>	
		
		<!-- <div class="px-2.5 py-0.5">Benthos<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" /></div>
		<div class="px-2.5 py-0.5">Dapr<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" /></div>
		<div class="px-2.5 py-0.5">Microservice<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" /></div> -->
 </div>