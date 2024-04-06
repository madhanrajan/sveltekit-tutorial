import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return { hello: "what is the meaing of this" };
};