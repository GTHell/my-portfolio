<script>
	const work_experience = [
		{
			year: '2023 - Present',
			title: 'Project Lead',
			description: [
				'Led the implementation of microservice architecture for payment system and improving the system security.',
				'Led the implementation of underwriting/screening system and reduced operational costs.',
			],
		},
		{
			year: '2020 - Present',
			title: 'MLOps Engineer',
			description: [
				'Developed and maintained a high-performance document extraction system for National ID Card and Driving License',
				'Developed and maintained a high-performance face recognition system.',
				'Applied computer vision techniques to improve the performance of the OCR system.',
				'Train and customize object detection model for specific use case.',
			],
		},
		{
			year: '2018 - 2020',
			title: 'IT executive (Software Developer)',
			description: [
				'Designed and deployed parking system for Sorya and Ratana Plaza mall to improve operation efficiency.',
				'Developed mobile application parking portal improve customer experience.',
				'Developed webpage portfolio and developed internal survey system for company\'s improvement.',
				'Provided support and training to the operation staff.'
			],
		},
		{
			year: '2017 - 2018',
			title: 'Full-Stack Developer (Lead Developer)',
			description: [
				'Designed and developed real time crypto monitoring web application.',
				'Maintenance servers with and optimized web application performance.',
			],
		},
	];

</script>

<div class="w-full">
	<ul>
		<!-- <h1 class="underline-offset-8 underline text-center md:text-left  w-full font-bold text-4xl leading-5 mb-4">Work Experience</h1> -->
		<h1 class="bg-blue-500 text-white  text-center w-full font-bold text-4xl leading-5 mb-4 p-4">Work Experience</h1>
		{#each work_experience as experience  (experience.year)}
		<li>
			<article>
				<div class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12">
					<h3 class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">{ experience.title }</h3>
					<time datetime="" class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">{ experience.year }</time>

					<ul class="list-disc md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0">
					{#each experience.description as description}
						<li class="ml-8 mb-2  dark:text-gray-300">{ description }</li>
					{/each}
					</ul>
				</div>
			</article>
		</li>
		{/each}
	</ul>
</div>