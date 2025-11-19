// @ts-nocheck
import type { LayoutLoad } from "./$types";

export const load = async ({ parent }: Parameters<LayoutLoad>[0]) => {
    await parent()
    return {
        nestedLayoutMsg: "Hello from nested layout!",
    };
};
