
            export let c = ["Ceci est un sous-chemin","Aller à la sous-page","Bienvenue sur SvelteKit",["Visitez ",[0,"svelte.dev/docs/kit"]," pour lire la documentation"],"Bonjour depuis le module","Charger les messages depuis l'état de la page","Charger les messages depuis les props/données","Bonjour depuis le layout !","Bonjour depuis la mise en page imbriquée !"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['fr'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        