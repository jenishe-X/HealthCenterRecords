<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import Purok from "$lib/purok.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<NavBar />
<main class="mt-0">
    <div class="bg-white items-center justify-center flex">
        This is the list of purok in Barangay Sta. Rita.
    </div>
    <Purok/>
</main>
<Footer/>
