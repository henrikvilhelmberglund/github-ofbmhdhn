
            /** @type {{[loadID: string]: {[locale: string]: () => Promise<import('wuchale/runtime').CatalogModule>}}} */
            const catalogs = {main: {en: () => import('./main.main.en.compiled.js'),es: () => import('./main.main.es.compiled.js'),fr: () => import('./main.main.fr.compiled.js')}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => catalogs[loadID][locale]()
            export const loadIDs = ['main']
        