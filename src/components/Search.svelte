<script>
    import { onMount } from 'svelte';
    import IconArrowLeft from './IconArrowLeft.svelte';

    export let onSwitchSearch;
    export let countries;
    export let onSelectCountry;

    let searchTerm = '';
    $: filteredList = countries.filter(item => item.Country.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1);

    const handleCountryClick = country => {
        onSelectCountry(country);
        onSwitchSearch();
    }

    let elm;

    onMount(function() {
        elm.focus();
    });
</script>

<main>
    <div class="search-box">
        <IconArrowLeft onclick={onSwitchSearch} />
        <input bind:value={searchTerm} type="text" placeholder="Search country" class="search-input" bind:this={elm} />
    </div>
    <ul>
        <li on:click={() => handleCountryClick('Worldwide')}>Worldwide</li>
        {#each filteredList as { Country }}
            <li on:click={() => handleCountryClick(Country)}>{Country}</li>
        {/each}
    </ul>
</main>

<style>
    main {
        height: 300px;
        overflow: auto;
    }

    .search-box {
        display: flex;
        position: fixed;
        background-color: white;
        width: 90%;
    }
    .search-input {
        flex: 1;
    }
    
    ul {
        list-style: none;
        text-align: left;
        padding-left: 25px;
        margin-top: 50px;
    }

    li {
        padding: 5px;
        cursor: pointer;
    }

    li:hover {
        background-color: #820263;
        color: white;
    }
</style>