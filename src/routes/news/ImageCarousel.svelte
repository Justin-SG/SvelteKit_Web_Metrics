<script lang="ts">
	import { onMount } from 'svelte';

	export let posts: { image: string; title: string; continent: string }[];

	let postHtmlElements: HTMLElement[] = [];
	let currentArticleIndex = 0;

	onMount(async () => {
		postHtmlElements[currentArticleIndex].classList.toggle('hidden');
	});

	function changeIndexBy(changeBy: number) {
		const expectedIndex = currentArticleIndex + changeBy;
		if (expectedIndex < 0 || expectedIndex > postHtmlElements.length - 1) return;
		displayArticle(expectedIndex);
	}
	function displayArticle(index: number) {
		if (currentArticleIndex === index) return;
		postHtmlElements[currentArticleIndex].classList.toggle('hidden');
		postHtmlElements[index].classList.toggle('hidden');
		currentArticleIndex = index;
	}
</script>

<div>
	{#each posts as post, index}
		<div bind:this={postHtmlElements[index]} class="m-auto w-full max-w-4xl pb-3 hidden">
			<div class="hover-img bg-white">
				<a href="#top">
					<img class="max-w-full w-full mx-auto" src={post.image} alt="alt title" />
				</a>
				<div class="py-3 px-6">
					<h3 class="text-lg font-bold leading-tight mb-2">
						<a href="#top">{post.title}</a>
					</h3>
					<a class="text-gray-500" href="#top">
						<span class="inline-block h-3 border-l-2 border-red-600 mr-2" />
						{post.continent}
					</a>
				</div>
			</div>
		</div>
	{/each}
	<button
		on:click={() => changeIndexBy(-1)}
		class="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg"
	>
		&#10094;
	</button>
	<button
		on:click={() => changeIndexBy(1)}
		class="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg right-4"
	>
		&#10095;
	</button>
</div>
<div style="text-align:center">
	{#each posts as post, index}
		<button
			on:click={() => displayArticle(index)}
			class="cursor-pointer h-4 w-4 mx-1 bg-slate-400 rounded-lg inline-block transition-all hover:bg-slate-100"
		/>
	{/each}
</div>
