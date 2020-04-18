<script>
    import { onMount } from 'svelte';
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
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="18px" class="icon" on:click={onSwitchSearch}>
            <path
                d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
            />
        </svg>
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
    .icon {
        transform: rotate(90deg);
        margin-right: 10px;
        margin-top: -7px;
        cursor: pointer;
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