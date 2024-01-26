<script>
	import Summary from '$lib/components/index/Summary.svelte';
	import AboutMe from '$lib/components/index/AboutMe.svelte';
	import Skills from '$lib/components/index/Skills.svelte';
	import WorkExperience from '$lib/components/index/WorkExperience.svelte';
	// import Education from '$lib/components/index/Education.svelte';
	import Projects from '$lib/components/index/Project.svelte';
	import Section from '$lib/components/index/Section.svelte';
	import Contact from '$lib/components/index/Contact.svelte';
	import Project from '$lib/components/index/Project.svelte';
</script>

<svelte:head>
	<title>Oudamsith Samin</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Section class="p-0">
	<Summary />
</Section>

<Section class="p-4 md:p-8">
	<AboutMe />
</Section>

<Section class="p-4 md:p-8">
	<!-- Skills -->
	<Skills />
</Section>

<!-- Experience -->
<Section class="p-4 md:p-8">
    <WorkExperience />
</Section>

<!-- Portfolio -->
<Section class="p-4 md:p-8">
	<Project />
</Section>

<!-- More about me -->
<!-- <Section class="p-4 md:p-8">
	<h1 class="font-bold text-3xl leading-5 mb-4">Education</h1>
</Section> -->

<Section class="p-4 md:p-8">
	<Contact />
</Section>

<style>
	.glitch-wrapper {
		/* width: 100%; */
		/* height: 100%; */
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: center; */
		/* text-align: center; */
		/* background-color: #000000; */
	}

	.glitch {
		position: relative;
		font-size: 50px;
		font-weight: bold;
		color: #ffffff;
		letter-spacing: 3px;
		z-index: 1;
	}

	.glitch:before,
	.glitch:after {
		display: block;
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.8;
	}

	.glitch:before {
		animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
		color: #00ffff;
		z-index: -1;
	}

	.glitch:after {
		animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
		color: #ff00ff;
		z-index: -2;
	}

	@keyframes glitch-it {
		0% {
			transform: translate(0);
		}

		20% {
			transform: translate(-2px, 2px);
		}

		40% {
			transform: translate(-2px, -2px);
		}

		60% {
			transform: translate(2px, 2px);
		}

		80% {
			transform: translate(2px, -2px);
		}

		to {
			transform: translate(0);
		}
	}
</style>
