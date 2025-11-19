<script lang="ts">
    import { page } from '$app/state'
    import { greet } from './hello.svelte.js'

    const myText = "This is a simple snippet example";

    const myObject = {
        name: 'SvelteKit',
        type: 'Framework',
    }

    const myNestedObject = {
      banana: {
        name: 'banana',
        color: 'yellow',
      },
      apple: {
        name: 'apple',
        color: 'red',
      }
    }
</script>
{#snippet simpleSnippet(t: string)}
	<p>{t}</p>
{/snippet}

{#snippet advancedSnippet(o: Record<string, string>)}
	{#each Object.entries(o) as [key, value]}
    <p>{key}: {value}</p>
  {/each}
{/snippet}

{#snippet superAdvancedSnippet(n: Record<string, Record<string, string>>)}
  {#each Object.values(n) as nested}
	  {#each Object.entries(nested) as [key, value]}
      <p>{key}: {value}</p>
    {/each}
  {/each}
{/snippet}

<p><a class="text-blue-600" href="/path?locale={page.data.locale}">Go to sub</a></p>
<h1>Welcome to SvelteKit</h1>
<p>{greet()}</p>
<p>{page.data.layoutMsg}</p>

{@render simpleSnippet(myText)}

{@render advancedSnippet(myObject)}

{@render superAdvancedSnippet(myNestedObject)}

<p>Visit <a class="text-blue-600" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
