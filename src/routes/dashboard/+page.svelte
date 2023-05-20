<script>
	// import Calculated_budget from 'calculated_budget.svelte';
	// import Budgets_list_table from 'budgets_list_table.svelte';
	// import Accounts_horizontal_tabs from 'accounts_horizontal_tabs.svelte';
	// import Entries_list_compact from 'entries_list_compact.svelte';
	// import Entries_upcoming from 'entries_upcoming.svelte';
	// import { combineAndSortByDate } from 'bookings.js';

	// export let data;

	// let transactions = data.overviewPageData.transactions;
	// let transfers = data.overviewPageData.transfers;

	// const bookings = combineAndSortByDate(transfers, transactions);
</script>

<div
	class="h-screen flex flex-col after:fixed after:-top-1/2 after:-right-1/2 after:-bottom-1/2 after:-left-1/2 after:-z-50 after:bg-gradient-to-br after:from-indigo-900 after:to-blue-800 after:content-['']"
>
	<div class="grid h-full min-h-0 grid-rows-4 gap-4 p-4 md:grid-flow-col md:grid-cols-6">
		<div class="flex items-center rounded-lg bg-white p-6 md:col-span-3 lg:col-span-2">
			<!-- <Calculated_budget /> -->
			a
		</div>
		<div
			class="row-span-2 overflow-y-auto rounded-lg bg-white md:col-span-3 md:row-span-3 lg:col-span-2"
		>
			<!-- <Budgets_list_table budgets={data.overviewPageData.budgets} /> -->
		</div>
		<div
			class="row-span-4 hidden rounded-lg bg-white md:col-span-3 md:flex md:flex-col lg:col-span-2"
		>
			<div class="w-full flex-initial rounded-lg bg-white">
				<!-- <Accounts_horizontal_tabs /> -->
			</div>
			<div class="min-h-0 flex-auto overflow-y-auto pt-2">
				<!-- <Entries_list_compact {bookings} /> -->
			</div>
		</div>
		<div class="row-span-2 hidden rounded-lg bg-white lg:col-span-2 lg:flex lg:flex-col">
			<div class="w-full flex-initial rounded-lg bg-white">
				<div class="border-b border-gray-200">
					<p class="mb-3 px-4 pt-4 text-lg font-medium">Upcoming bookings</p>
				</div>
			</div>
			<div class="min-h-0 flex-auto overflow-y-auto pt-2">
				<!-- <Entries_upcoming /> -->
			</div>
		</div>
		<div class="col-span-2 row-span-2 hidden rounded-lg bg-white p-6 lg:flex lg:justify-around">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-52 w-52"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
				/>
			</svg>
		</div>

		<!-- Buttons mobile Version -->
		<div class="md:hidden">
			<div class="flex justify-between">
				<button
					type="button"
					class="mr-4 mb-4 w-1/2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
					>Entries</button
				>
				<button
					type="button"
					class="mb-4 w-1/2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
					>Accounts</button
				>
			</div>
			<div class="flex justify-center">
				<button
					type="button"
					class="mb-2 w-1/2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
					>Statistics</button
				>
			</div>
		</div>
	</div>
</div>
