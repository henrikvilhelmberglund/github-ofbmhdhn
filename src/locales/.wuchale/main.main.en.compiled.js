
            export let c = ["This is a sub path","Go to sub","Welcome to SvelteKit",["Visit ",[0,"svelte.dev/docs/kit"]," to read the documentation"],"Hello from module","Load messages from page state","Load messages from props/data","Hello from layout!","Hello from nested layout!"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['en'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        