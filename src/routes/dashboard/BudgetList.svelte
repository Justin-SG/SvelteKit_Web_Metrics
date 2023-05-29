<script lang="ts">
	import FormattedNumber from './FormattedNumber.svelte';

	export let budgets: Budget[];

	interface Budget {
		limit: number;
		spent: number;
		name: string;
		percentage: number;
	}
</script>

<div class="px-4">
	{#each budgets as budget}
		<a href="#top" class="block border-b">
			<div>
				<div class="mb-1 flex justify-between pt-4 text-base font-medium md:text-lg">
					<span>{budget.name}</span>
					<span>
						<FormattedNumber number={budget.spent} /> / <FormattedNumber number={budget.limit} />
					</span>
				</div>
				<div class="mb-4 h-4 w-full rounded-full bg-gray-200">
					<div
						class="h-4 rounded-full"
						class:bg-green-400={budget.percentage <= 0.7}
						class:bg-yellow-300={budget.percentage > 0.7 && budget.percentage <= 0.9}
						class:bg-red-500={budget.percentage > 0.9}
						style="width: {budget.percentage * 100}%"
					/>
				</div>
			</div>
		</a>
	{/each}
</div>
