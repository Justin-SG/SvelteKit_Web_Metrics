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
	</div>
	<div class="h-6 w-full rounded-full bg-red-400 dark:bg-gray-400">
		<div class="h-6 w-4/5 rounded-full bg-green-400 dark:bg-green-400" />
	</div>
</div>
