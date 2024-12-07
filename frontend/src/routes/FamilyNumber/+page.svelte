<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button, Label, Input, InputAddon, ButtonGroup, Select } from 'flowbite-svelte';
    import { ArrowRightOutline, CirclePlusSolid } from 'flowbite-svelte-icons';
    import { Modal, Helper } from 'flowbite-svelte';
    import NavBar from '$lib/NavBar.svelte';
    import { SearchOutline, ArchiveOutline } from 'flowbite-svelte-icons';
   

    interface Family {
    familylastname: string;
    familynumber?: number;
    father?: string;
    purok?: string;
  }

  let families: Family[] = [];
  let searchTerm: string = ''; 
  let loading: boolean = true; 

  

const fetchFamilies = async () => {
  try {
    const response = await fetch('http://localhost/api/familynumber');
    const result = await response.json();

    if (Array.isArray(result.data)) {
      families = result.data as Family[];
      console.log('Fetched Families:', families);
    } else {
      console.error('Expected an array but received:', result.data);
    }
  } catch (error) {
    console.error('Error fetching families:', error);
  } finally {
    loading = false;
  }
};

fetchFamilies();




    let formModal = false;

    export let family;
     // Data passed from the load function

    // Initial object for new family data
    let newFamily = { lastname: '', father: '', selectedpurok: '' };

     async function addFamily() {
        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch("https://6740cc3cd0b59228b7f162ff.mockapi.io/familynumber", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFamily) 
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Added family:", result);

                
                family = [...families, result];

              
                newFamily = { lastname: '', father: '', selectedpurok: '' };

                alert("Form submitted successfully!");
            } else {
                console.error("Failed to post family:", response.status);
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }

    


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


    //Form Validation
    let errors = {
    lastname: '',
    father:'',
    selectedpurok: '',
    }; // Object to store validation errors

    // Function to validate the form
    function validateForm() {
        let valid = true;
        errors = {
          lastname: '',
          father:'',
          selectedpurok: '',
        }; // Reset errors before validation

        if (!newFamily.lastname.trim()) {
            errors.lastname = "Last Name is required.";
            valid = false;
        } else {
            errors.lastname = "";
        }

        if (!newFamily.father.trim()) {
            errors.father = "Father's Name is required.";
            valid = false;
        } else {
            errors.father = "";
        }

        if (!newFamily.selectedpurok.trim()) {
            errors.selectedpurok = "Selected Purok is required.";
            valid = false;
        } else {
            errors.selectedpurok = "";
        }

        return valid;
    }
    
</script>


<NavBar/>
<main>
<div class="relative">
   
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

<ButtonGroup class="mt-4 mb-2 p-2 w-80  ml-4">
  <InputAddon>
    <SearchOutline class="w-4 h-4 text-gray-500 dark:text-gray-400" />
  </InputAddon>
  <Input id="firstname" bind:value={searchTerm} placeholder="Search Lastname or Family number" />
</ButtonGroup>

  <Table>
        <TableHead class="bg-amber-300 text-center text-sm">
            <TableHeadCell>Family No.</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Father's Name</TableHeadCell>
            <TableHeadCell>Purok</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y text-center text-sm bg-transparent">
          {#each families.filter((family: Family) => {
            const familylastname = family?.familylastname?.toLowerCase() || ''; 
            const familynumber = family?.familynumber?.toString() || ''; 
            return familylastname.includes(searchTerm.toLowerCase()) || familynumber.includes(searchTerm);
          }) as family}      
          <TableBodyRow>
                    <TableBodyCell class="bg-transparent">{family.familynumber}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">{family.familylastname}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">{family.father}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">{family.purok}</TableBodyCell>
                    <TableBodyCell class="bg-transparent">
                        <Button 
                            style="background-color: #47663B" 
                            href="/FamilyMember" 
                            class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                            View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                        </Button>
                        <Button 
                        style="background-color: #47663B" 
                        href="/FamilyMember" 
                        class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                        Archive <ArchiveOutline class="w-3 h-3 ms-1 text-white" />
                    </Button>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
        
    </Table>

</div>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#" on:submit|preventDefault={addFamily}>
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adding Visitation</h3>
         
    <!-- Lastname -->
    <div class="mb-1">
      <Label for="lastname" class="block mb-2">Lastname:</Label>
      <ButtonGroup class="w-full">
        <InputAddon>
        </InputAddon>
        <Input id="lastname" bind:value={newFamily.lastname} placeholder="Enter Lastname" />
      </ButtonGroup>
      {#if errors.lastname}
      <Helper class="mt-2" color="red">{errors.lastname}</Helper>
      {/if}
    </div>
    
    <!-- Father name -->
    <div class="mb-1">
      <Label for="father" class="block mb-2">Father: </Label>
      <ButtonGroup class="w-full">
        <InputAddon>
        </InputAddon>
        <Input id="father" bind:value={newFamily.father} placeholder="Enter Father's Name" />
      </ButtonGroup>
      {#if errors.father}
      <Helper class="mt-2" color="red">{errors.father}</Helper>
      {/if}
    </div>
    
    <!-- Purok -->
    <div class="mb-1">
      <ButtonGroup class="w-full block mb-2"> 
        <Label>
            Purok
            <Select class="mt-2" bind:value={newFamily.selectedpurok}>
              {#each purok as purok}
                <option value={purok.value}>{purok.name}</option>
              {/each}
            </Select>
          </Label>
      </ButtonGroup>
      {#if errors.selectedpurok}
      <Helper class="mt-2" color="red">{errors.selectedpurok}</Helper>
      {/if}
    </div>
    
    <!--Buttons-->
          <div class="mt-5 flex justify-left space-x-4">
              <button class="text-white rounded-full px-6 py-3 bg-green-950 hover:bg-green-700">
                  Add Family &rarr;
              </button>    
          </div>
      
    </form>
  </Modal>
</main>
