
            export let c = ["Esta es una subruta","Ir a sub","Bienvenido a SvelteKit",["Visita ",[0,"svelte.dev/docs/kit"]," para leer la documentación"],"Hola desde el módulo","Cargar mensajes desde el estado de la página","Cargar mensajes desde props/data","SvelteKit español","Framework español","This is a simple snippet example español","¡Hola desde el layout!","¡Hola desde el diseño anidado!"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['es'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        