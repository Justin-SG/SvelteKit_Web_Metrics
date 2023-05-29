<!-- <script>
	import Modal from '$lib/components/forms/modal.svelte';
	/**
	 * @type {{ show: () => any; }}
	 */
	let disposableIncomeModal;
</script> -->

<div class="w-full">
	<div class="mb-2 flex justify-between">
		<span class="text-4xl font-medium text-green-400">1.200</span>
		<button
			on:click={() => alert('clicked on something')}
			type="button"
			class="ml-3 inline-flex rotate-90 items-center rounded-lg p-2 text-base text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
		>
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M 7 6 h 13 M 4 12 h 16 m -7 6 h 7"
				/></svg
			>
		</button>
		<!-- <Modal bind:modal={disposableIncomeModal}>
			<div class="flex items-start justify-between rounded-t border-b p-4">
				<h3 class="text-xl font-semibold text-gray-900">Disposable income</h3>
			</div>
			<div class="space-y-6 p-6">
				<div class="mb-0.5 flex justify-between">
					<span class="text-xl text-gray-900 dark:text-white">Fixed income</span>
					<span class="text-xl font-medium text-green-400">1500,-</span>
				</div>
				<div class="mb-0.5 flex justify-between">
					<span class="text-xl text-gray-900 dark:text-white">Addtional income</span>
					<span class="text-xl font-medium text-green-400">200,-</span>
				</div>
				<div class="mb-0.5 flex justify-between">
					<span class="text-xl text-gray-900 dark:text-white">Fixed expenses</span>
					<span class="text-xl font-medium text-red-400 dark:text-white">300,-</span>
				</div>
				<div class="mb-0.5 flex justify-between">
					<span class="text-xl text-gray-900 dark:text-white">Savings</span>
					<span class="text-xl font-medium text-red-400 dark:text-white">150,-</span>
				</div>

				<hr class="my-2 h-px border-0 bg-gray-200 dark:bg-gray-700" />

				<div class="mb-1 flex justify-between">
					<span class="text-xl font-semibold text-gray-900">Total</span>
					<span class="text-xl font-semibold text-green-400">1250,-</span>
				</div>
			</div>
		</Modal> -->
	</div>
	<div class="h-6 w-full rounded-full bg-red-400 dark:bg-gray-400">
		<div class="h-6 rounded-full bg-green-400 dark:bg-green-400" style="width: 80%" />
	</div>
</div>
