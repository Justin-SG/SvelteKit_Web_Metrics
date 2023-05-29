<script lang="ts">
	import Disposable_income from './DisposableIncome.svelte';
	import Budget_list from './BudgetList.svelte';
	import Entries_list from './EntriesList.svelte';
	import type { PageData } from './$types';
	import { z } from 'zod';

	export let data: PageData;
	let modalHtmlElement: HTMLDivElement;

	function toggleModal() {
		modalHtmlElement.classList.toggle('hidden');
	}

	function submit(event: SubmitEvent) {
		const data = {
			date: document.querySelector<HTMLInputElement>('#date')!.value,
			amount: document.querySelector<HTMLInputElement>('#amount')!.value,
			accountId: document.querySelector<HTMLInputElement>('#accountId')!.value,
			description: document.querySelector<HTMLInputElement>('#description')!.value
		};

		const schema = z.object({
			date: z.coerce.date(),
			amount: z.coerce.number().positive(),
			accountId: z.coerce.number().positive(),
			description: z.string().max(255)
		});

		const result = schema.safeParse(data);
		console.log(result);

		if (!result.success) event.preventDefault();
	}
</script>

<div class="h-screen flex flex-col bg-gradient-to-br from-indigo-900 to-blue-800">
	<nav class="border-gray-200 bg-white px-2 py-2.5 sm:px-4 md:h-20">
		<div class="container relative mx-auto flex flex-wrap items-center justify-between">
			<a href="/" class="flex items-center">
				<span
					class="self-center whitespace-nowrap bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent"
					>Dashboard</span
				>
			</a>

			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul
					class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-base text-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:font-medium"
				>
					<li>
						<a
							href="/"
							class="block rounded py-2 pr-4 pl-3 decoration-2 underline-offset-8 hover:bg-gray-100 hover:underline md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
							aria-current="page">Overview</a
						>
					</li>
					<li>
						<a
							href="/entries"
							class="block rounded py-2 pr-4 pl-3 decoration-2 underline-offset-8 hover:bg-gray-100 hover:underline md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
							>Entries</a
						>
					</li>
					<li>
						<a
							href="/accounts"
							class="block rounded py-2 pr-4 pl-3 decoration-2 underline-offset-8 hover:bg-gray-100 hover:underline md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
							>Accounts</a
						>
					</li>
					<li>
						<a
							href="/statistics"
							class="block rounded py-2 pr-4 pl-3 decoration-2 underline-offset-8 hover:bg-gray-100 hover:underline md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700"
							>Statistics</a
						>
					</li>
				</ul>
			</div>
			<div class="flex">
				<button
					on:click={() => alert('clicked on something')}
					type="button"
					class="ml-4 inline-flex items-center rounded-lg p-2 text-base text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>
			<div
				class="z-30 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow"
				style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 10px);"
			>
				<ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
					<li>
						<a href="/" class="block py-2 px-4 hover:bg-gray-100">Overview</a>
					</li>
					<li>
						<a href="/entries" class="block py-2 px-4 hover:bg-gray-100">Entries</a>
					</li>
					<li>
						<a href="/statistics" class="block py-2 px-4 hover:bg-gray-100">Statistics</a>
					</li>
					<li>
						<a href="/categories-tags" class="block py-2 px-4 hover:bg-gray-100"
							>Categories / Tags</a
						>
					</li>
					<li>
						<a href="/accounts" class="block py-2 px-4 hover:bg-gray-100">Accounts</a>
					</li>
					<li>
						<a href="/fixed-bookings" class="block py-2 px-4 hover:bg-gray-100">Fixed bookings</a>
					</li>
					<li>
						<a href="/budgets" class="block py-2 px-4 hover:bg-gray-100">Budgets</a>
					</li>
					<hr class="h-px border-0 bg-gray-200 dark:bg-gray-700" />
					<li>
						<a href="/settings" class="block py-2 px-4 hover:bg-gray-100">Settings</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<button
		class="bg-green-300 fixed bottom-2 right-2 z-20 ml-2 rounded-full px-5 py-5"
		on:click={toggleModal}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-7 w-7"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>

	<div
		bind:this={modalHtmlElement}
		class="hidden fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black z-50"
	>
		<button on:click={toggleModal}>Close</button>
		<div class="flex items-center justify-center w-full h-full">
			<div class="w-full p-6 max-w-6xl bg-white rounded">
				<form class="w-full" action="/" method="POST" on:submit={submit}>
					<div class="flex-between flex flex-wrap gap-y-1.5">
						<div class="w-full space-y-1.5">
							<label for="date" class="mb-2 block text-sm font-medium"> Date </label>
							<input
								id="date"
								type="date"
								name="date"
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
								required
							/>
						</div>
						<div class="w-full space-y-1.5">
							<label for="amount" class="mb-2 block text-sm font-medium"> Amount </label>
							<input
								id="amount"
								type="number"
								name="amount"
								class="w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
								min="0"
								step=".01"
								pattern="^\d*(\.\d{2})?$"
								placeholder="0,00"
								required
							/>
						</div>
						<div class="w-full space-y-1.5">
							<select
								id="accountId"
								name="accountId"
								required
								class="block w-full rounded-lg border p-2.5 text-base"
							>
								<option value="1">Savings account</option>
								<option value="2">Daily account</option>
							</select>
						</div>
						<div class="w-full md:pl-1">
							<label for="description" class="mb-2 block text-sm font-medium"> Description </label>
							<textarea
								id="description"
								rows="4"
								name="description"
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
							/>
						</div>
					</div>
					<div class="mt-2 flex">
						<button class="my-2 mx-auto bg-green-300 px-4 py-2 rounded" type="submit">
							Add transfer
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="min-h-0 flex-auto">
		<div class="grid h-full min-h-0 grid-rows-4 gap-4 p-4 md:grid-flow-col md:grid-cols-6">
			<div class="flex items-center rounded-lg bg-white p-6 md:col-span-3 lg:col-span-2">
				<Disposable_income />
			</div>
			<div
				class="row-span-2 overflow-y-auto rounded-lg bg-white md:col-span-3 md:row-span-3 lg:col-span-2"
			>
				<Budget_list budgets={data.budgets} />
			</div>
			<div
				class="row-span-4 hidden rounded-lg bg-white md:col-span-3 md:flex md:flex-col lg:col-span-4"
			>
				<div class="min-h-0 flex-auto overflow-y-auto pt-2">
					<Entries_list bookings={data.transactions} />
				</div>
			</div>
		</div>
	</div>
</div>
