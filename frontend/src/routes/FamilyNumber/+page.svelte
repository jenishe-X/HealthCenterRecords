<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button, Label, Input, InputAddon, ButtonGroup, Select } from 'flowbite-svelte';
    import { ArrowRightOutline, CirclePlusSolid } from 'flowbite-svelte-icons';
    import { Modal } from 'flowbite-svelte';
    import NavBar from '$lib/NavBar.svelte';

    export let data;
    const families = data.families;

    let formModal = false;

    // Define the father for items
    type Item = {
        familynumber: number;
        lastname: string;
        father: string;
        purok: string;
    };

    let familynumber = '';
    let lastname = '';
    let father = '';
    let selectedpurok = '';

    let purok = [
      { value: '1A', name: '1A' },
      { value: '1B', name: '1B' },
      { value: '2', name: '2' },
      { value: '3A', name: '3A' },
      { value: '3B', name: '3B' },
      { value: '3C', name: '3C' },
      { value: '3D', name: '3D' },
      { value: '3E', name: '3E' },
      { value: '3F', name: '3F' },
      { value: '4A', name: '4A' },
      { value: '4B', name: '4B' },
      { value: '4C', name: '4C' },
      { value: '4D', name: '4D' },
      { value: '4E', name: '4E' },
      { value: '5A1', name: '5A1' },
      { value: '5A', name: '5A' },
      { value: '5B', name: '5B' },
      { value: '5C', name: '5C' },
      { value: '5D', name: '5D' },
      { value: '5E', name: '5E' },
      { value: '5F', name: '5F' },
      { value: '6A', name: '6A' },
      { value: '6A EXT', name: '6A EXT' },
      { value: '6B1', name: '6B1' },
      { value: '6B2', name: '6B2' },
      { value: '6C1', name: '6C1' },
      { value: '6C2', name: '6C2' },
      { value: '6D', name: '6D' },
      { value: '6E', name: '6E' },
      { value: '7', name: '7' },
    ];


    // Define the data
    let items: Item[] = [
        { familynumber: 1, lastname: 'Dela Cruz', father: 'Juan', purok: '2' },
        { familynumber: 2, lastname: 'Tolentino', father: 'Robert', purok: '1-B' },
        { familynumber: 3, lastname: 'Delos Santos', father: 'Bornok', purok: '6-A EXT.' },
        { familynumber: 4, lastname: 'Cerezo', father: 'Roben', purok: '4' }
    ];

    // Define a function to handle viewing an item
    function viewItem(item: Item) {
        alert(`Viewing details for ${item.lastname}`);
        // You can add more logic for modal or navigation here
    }
</script>

<NavBar/>
<main>
<div class="relative">
    <!-- <img src="assets/bg1.png" class="absolute inset-0  object-cover opacity-30 z-0" alt="bg" /> -->

    <!-- Container for the button -->
    <div class="absolute right-40 z-20" style="top: 30px">
      <Button 
      on:click={() => (formModal = true)} class="mx-6 z-10 bg-green-950 text-white py-2 px-5 rounded hover:bg-green-700 transition-all duration-200 ease-in-out">
        Add Family
        <CirclePlusSolid class="w-3 h-3 ml-1 text-white" />
      </Button>
    </div>
</div>

<div class="relative justify-center items-center z-0">
    <Table
        {items}
        placeholder="Search by lastname name"
        hoverable={true}
        filter={(item: Item, searchTerm: string) => 
         item.lastname.toLowerCase().includes(searchTerm.toLowerCase()) || 
         item.familynumber.toString().includes(searchTerm)
        }
    >
        <TableHead class="bg-amber-300 text-center text-sm">
            <TableHeadCell>Family No.</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Father's Name</TableHeadCell>
            <TableHeadCell>Purok</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell> <!-- New column for actions -->
        </TableHead>
        <TableBody tableBodyClass="divide-y text-center text-sm bg-transparent">
            {#each families as family}
                <TableBodyRow>
                    <TableBodyCell class="bg-transparent">{family.id}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">{family.lastname}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">{family.father}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">{family.selectedpurok}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">
                        <Button 
                            style="background-color: #47663B" 
                            href="/FamilyMember" 
                            class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                            View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                        </Button>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
        
    </Table>
</div>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adding Visitation</h3>
     
     <!-- Family Number -->
  <div class="mb-1">
      <Label for="familynumber" class="block mb-2">Family Number:</Label>
      <ButtonGroup class="w-full">
        <InputAddon>
        </InputAddon>
        <Input id="familynumber" bind:value={familynumber} placeholder="Enter Family Number" />
      </ButtonGroup>
    </div>
    
    <!-- Lastname -->
    <div class="mb-1">
      <Label for="lastname" class="block mb-2">Lastname:</Label>
      <ButtonGroup class="w-full">
        <InputAddon>
        </InputAddon>
        <Input id="lastname" bind:value={lastname} placeholder="Enter Lastname" />
      </ButtonGroup>
    </div>
    
    <!-- Father name -->
    <div class="mb-1">
      <Label for="father" class="block mb-2">Father: </Label>
      <ButtonGroup class="w-full">
        <InputAddon>
        </InputAddon>
        <Input id="father" bind:value={father} placeholder="Enter Father's Name" />
      </ButtonGroup>
    </div>
    
    <!-- Purok -->
    <div class="mb-1">
      <ButtonGroup class="w-full block mb-2"> 
        <Label>
            Purok
            <Select class="mt-2" bind:value={selectedpurok}>
              {#each purok as purok}
                <option value={purok.value}>{purok.name}</option>
              {/each}
            </Select>
          </Label>
      </ButtonGroup>
    </div>
    
    <!--Buttons-->
          <div class="mt-5 flex justify-left space-x-4">
              <button class="text-white rounded-full px-6 py-3 bg-green-950">
                  Add Family &rarr;
              </button>    
          </div>
      
    </form>
  </Modal>
</main>
