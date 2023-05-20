<script>
	// import '../app.postcss';
	// import 'flowbite/dist/flowbite.css';
	// import { applyAction, enhance } from '$app/forms';
	// import { invalidateAll } from '$app/navigation';
	// import { page } from '$app/stores';
	// import { onMount } from 'svelte';
	// import Login_button from '$lib/components/auth/login_button.svelte';
	// import Primary_button from '$lib/components/basic/primary_button.svelte';
	// import Modal from '$lib/components/forms/modal.svelte';
	// import Date_input from '$lib/components/forms/date_input.svelte';
	// import Text_area from '$lib/components/forms/text_area.svelte';
	// import Signed_number_input from '$lib/components/forms/signed_number_input.svelte';
	// import Multi_select_tags from '$lib/components/forms/multi_select_tags.svelte';
	// import Select_accounts from '$lib/components/forms/select_accounts.svelte';
	// import Select_categories from '$lib/components/forms/select_categories.svelte';
	// import Account_access_request from '$lib/components/accounts/access/accounts_access_request.svelte';
	// import NotificationsOverlay from '$lib/components/basic/notifications_overlay.svelte';
	// import { generateEnhance } from '$lib/client/forms/enhance';

	/** @type {{ invalidFields: string | string[]; }} */ let formResponse;
	/** @type {{ hide: () => void; show: () => any; }} */ let addTransactionModal;
	/** @type {import('./$types').LayoutData} */ export let data;
	/** @type {string}             */ let selectedForm = 'EXPENSE';
	/** @type {number | undefined} */ let selectedAccountOwnerId;
	/** @type {HTMLButtonElement}  */ let navTriggerHtmlElement;
	/** @type {HTMLDivElement}     */ let navTargetHtmlElement;
	/** @type {HTMLButtonElement}  */ let messagesTriggerHtmlElement;
	/** @type {HTMLDivElement}     */ let messagesTargetHtmlElement;

	// $: incomeFormVisible = selectedForm === 'INCOME';
	// $: expenseFormVisible = selectedForm === 'EXPENSE';
	// $: transferFormVisible = selectedForm === 'TRANSFER';

	// const formToSignMapping = {
	// 	INCOME: 'POSITIVE',
	// 	EXPENSE: 'NEGATIVE',
	// 	TRANSFER: 'TRANSFER'
	// };

	// // @ts-ignore
	// $: amountSign = formToSignMapping[selectedForm];
	// onMount(() => {
	// 	// @ts-ignore
	// 	new Dropdown(navTargetHtmlElement, navTriggerHtmlElement);
	// 	// @ts-ignore
	// 	new Dropdown(messagesTargetHtmlElement, messagesTriggerHtmlElement);
	// });

	// function handleLogout() {
	// 	/** @param {{ result: import('@sveltejs/kit').ActionResult; }} Response */
	// 	return async ({ result }) => {
	// 		invalidateAll();
	// 		await applyAction(result);
	// 	};
	// }
</script>

<nav class="border-gray-200 bg-white px-2 py-2.5 sm:px-4 md:h-20">
	<div class="container relative mx-auto flex flex-wrap items-center justify-between">
		<a href="/" class="flex items-center">
			<span
				class="self-center whitespace-nowrap bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent"
				>elstr</span
			>
		</a>

		<div
			class="hidden w-full md:block md:w-auto"
			id="navbar-default"
		>
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
				bind:this={navTriggerHtmlElement}
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
			bind:this={navTargetHtmlElement}
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
					<a href="/categories-tags" class="block py-2 px-4 hover:bg-gray-100">Categories / Tags</a>
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

<!-- FAB -->
	<!-- <Primary_button
		on:click={addTransactionModal.show()}
		class="fixed bottom-2 right-2 z-20 ml-2 !rounded-full px-5 py-5"
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
	</Primary_button> -->

<!-- Add Transaction Modal -->
<!-- {#if data.userAuthenticated}
	<Modal width="max-w-xl" bind:modal={addTransactionModal}>
		<div class="w-full p-6">
			<form
				class="w-full"
				method="POST"
				use:enhance
			>
				<div class="text-center">
					<div class="mb-4 inline-flex rounded-md" role="group">
						<input
							type="radio"
							bind:group={selectedForm}
							id="income"
							name="transactionType"
							value="INCOME"
							class="hidden"
						/>
						<label
							for="income"
							class:!border-[#63B75A]={incomeFormVisible}
							class:!text-[#63B75A]={incomeFormVisible}
							class="cursor-pointer rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-base font-medium text-gray-900 hover:border-[#63B75A] hover:text-[#63B75A]"
						>
							Income
						</label>
						<input
							type="radio"
							bind:group={selectedForm}
							id="expense"
							name="transactionType"
							value="EXPENSE"
							class="hidden"
						/>
						<label
							for="expense"
							class:!border-red-500={expenseFormVisible}
							class:!text-red-500={expenseFormVisible}
							class="cursor-pointer border border-gray-200 bg-white py-2 px-4 text-base font-medium text-gray-900 hover:border-red-500 hover:text-red-500"
						>
							Expense
						</label>
						<input
							type="radio"
							bind:group={selectedForm}
							id="transfer"
							name="transactionType"
							value="TRANSFER"
							class="hidden"
						/>
						<label
							for="transfer"
							class:!border-gray-900={transferFormVisible}
							class:!text-gray-900={transferFormVisible}
							class="cursor-pointer rounded-r-md border border-gray-200 bg-white py-2 px-4 text-base font-medium text-gray-900 hover:border-gray-900 hover:text-gray-900"
						>
							Transfer
						</label>
					</div>
				</div>
				<div class="flex-between flex flex-wrap gap-y-1.5">
					<div class="order-1 w-full md:order-1 md:!w-1/2 md:pr-1">
						<div class="mb-1.5">
							<Date_input
								isValid={!formResponse?.invalidFields.includes('date')}
								name="date"
								uniqueIdForLabel="dateNewBooking"
								placeholder=""
								required
							>
								<svelte:fragment slot="label-content">Date</svelte:fragment>
							</Date_input>
						</div>
						<div>
							<Signed_number_input
								isValid={!formResponse?.invalidFields.includes('amount')}
								name="amount"
								uniqueIdForLabel="amountNewBooking"
								placeholder="0,00"
								sign={amountSign}
								required
							>
								<span slot="label-content">Amount</span>
							</Signed_number_input>
						</div>
					</div>
					<div
						class:contents={transferFormVisible}
						class="order-2 w-full space-y-1.5 md:order-3 md:block md:!w-1/2 md:pr-1"
					>
						<div class="order-2 w-full space-y-1.5">
							<Select_accounts
								isValid={!formResponse?.invalidFields.includes('accountId') &&
									!formResponse?.invalidFields.includes('fromAccountId')}
								name={transferFormVisible ? 'fromAccountId' : 'accountId'}
								uniqueIdForLabel="accountNewBooking"
								required
								bind:selectedAccountOwnerId
							>
								<span slot="label-content">{transferFormVisible ? 'From' : 'Account'}</span>
							</Select_accounts>
						</div>
						<div class="order-4 w-full space-y-1.5">
							<Select_categories
								isValid={!formResponse?.invalidFields.includes('categoryId')}
								name="categoryId"
								uniqueIdForLabel="categoryNewBooking"
								required={!transferFormVisible}
								displayedUserId={selectedAccountOwnerId}
							>
								<svelte:fragment slot="label-content">
									Category
									{#if transferFormVisible}
										<span class="text-sm text-gray-300"> (optional) </span>
									{/if}
								</svelte:fragment>
							</Select_categories>
						</div>
					</div>
					<div class="order-4 w-full md:order-2 md:!w-1/2 md:pl-1">
						<Text_area
							isValid={!formResponse?.invalidFields.includes('description')}
							name="description"
							uniqueIdForLabel="descriptionNewBooking"
							placeholder=""
							class="min-h-0 resize-none"
						>
							<span slot="label-content">
								Description
								<span class="text-sm text-gray-300"> (optional)</span>
							</span>
						</Text_area>
					</div>
					{#if transferFormVisible}
						<div class="order-3 w-full md:order-4 md:!w-1/2 md:pl-1">
							<Select_accounts
								isValid={!formResponse?.invalidFields?.includes('toAccountId')}
								name="toAccountId"
								required={transferFormVisible}
								uniqueIdForLabel="accountToNewBooking"
							>
								<span slot="label-content">To</span>
							</Select_accounts>
						</div>
					{/if}
					<div
						class:hidden={transferFormVisible}
						class:md:!order-5={transferFormVisible}
						class="order-5 w-full md:order-4 md:!w-1/2 md:pl-1"
					>
						<Multi_select_tags
							isValid={!formResponse?.invalidFields.includes('tags')}
							name="tags"
							uniqueIdForLabel="tagsNewBooking"
							displayedUserId={selectedAccountOwnerId}
						>
							<svelte:fragment slot="label-content">
								Tags
								<span class="text-sm text-gray-300"> (optional)</span>
							</svelte:fragment>
						</Multi_select_tags>
					</div>
				</div>
				<div class="mt-2 flex">
					<Primary_button
						class="my-2 mx-auto md:order-5"
						formaction={transferFormVisible
							? '/entries?/createTransfer'
							: '/entries?/createTransaction'}
						type="submit"
					>
						{transferFormVisible ? 'Add transfer' : 'Add transaction'}
					</Primary_button>
				</div>
			</form>
		</div>
	</Modal>
{/if} -->

<!-- <NotificationsOverlay /> -->

<!-- Content -->
<div class="min-h-0 flex-auto">
	<slot />
</div>