import type { PageServerLoad } from './$types';
import prisma from '$lib/prismaClient';

export const prerender = false;
export const ssr = false;
export const csr = false;

export const  load = (async () => {
	const transactions = await prisma.transaction.findMany();
	const budgets = await prisma.budget.findMany();

	return {
		transactions,
		budgets
	};
}) satisfies PageServerLoad;
