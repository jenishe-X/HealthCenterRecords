<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button, ButtonGroup, Input, InputAddon } from 'flowbite-svelte';
    import { ArrowRightOutline, CirclePlusSolid, SearchOutline } from 'flowbite-svelte-icons';
    

  //   //Will align the variable to MockAPI - should be changed later on
  //   interface Family {
  //   lastname?: string;
  //   familynumber?: number;
  //   father?: string;
  //   selectedpurok?: string;
  // }

  // let families: Family[] = [];
  // let searchTerm: string = '';
  // let loading: boolean = true; 

   
  //  const fetchFamilies = async () => {
  //   try {
  //     const response = await fetch('https://6740cc3cd0b59228b7f162ff.mockapi.io/familynumber');
  //     families = await response.json(); 
  //   } catch (error) {
  //     console.error('Error fetching families:', error);
  //   } finally {
  //     loading = false; 
  //   }
  // };

  // fetchFamilies();

  // For Offline purposes
type Item = {
    id: number;
    firstname: string;
    lastname: string;
    familyrole: string;
    };

    let items: Item[] = [
    { id: 1, lastname: 'De Guzman', firstname: 'Joe', familyrole: 'Father' },
    { id: 2, lastname: 'De Guzman', firstname: 'Dina', familyrole: 'Mother' },
    { id: 3, lastname: 'De Guzman', firstname: 'Jake', familyrole: 'Child' },
    { id: 4, lastname: 'De Guzman', firstname: 'Mae', familyrole: 'Child' },

   
  
];
  
</script>


<div class="relative">
    <!-- Container for the button -->
    <div class="absolute right-40 z-10" style="top: 30px">
      <Button 
      href="/MemberForm"
      class="mx-6 z-10 bg-green-950 text-white py-2 px-5 rounded hover:bg-green-700 transition-all duration-200 ease-in-out">
        Add Family Member 
        <CirclePlusSolid class="w-3 h-3 ml-1 text-white" />
      </Button>
    </div>
</div>

<div class="relative justify-center items-center z-0">

    <ButtonGroup class="mt-4 mb-2 p-2 w-80  ml-4">
        <InputAddon>
          <SearchOutline class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </InputAddon>
                <Input id="firstname" placeholder="Search Lastname or Family number" />

        <!-- <Input id="firstname" bind:value={searchTerm} placeholder="Search Lastname or Family number" /> -->
      </ButtonGroup>
   
    <!-- <Table
       
    >
        <TableHead class="bg-amber-300 text-center text-sm">
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Family Role</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell> 
        </TableHead>
        <TableBody tableBodyClass="divide-y text-center">
            {#each families.filter((family: Family) => {
                const lastname = family?.lastname?.toLowerCase() || ''; 
                const familynumber = family?.familynumber?.toString() || ''; 
                return lastname.includes(searchTerm.toLowerCase()) || familynumber.includes(searchTerm);
              }) as family}   
            <TableBodyRow>
                <TableBodyCell>{family.familynumber}</TableBodyCell>
                <TableBodyCell>{family.lastname}</TableBodyCell>
                <TableBodyCell>{family.father}</TableBodyCell>
                <TableBodyCell>{family.selectedpurok}</TableBodyCell>
                <TableBodyCell>
                    <Button 
                        style="background-color: #47663B" href="/MemberProfile" class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                        View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                    </Button>
                </TableBodyCell>
            </TableBodyRow>
            {/each}
        </TableBody>
    </Table> -->

    <Table
       {items}
    >
        <TableHead class="bg-amber-300 text-center text-sm">
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Family Role</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell> 
        </TableHead>
        <TableBody tableBodyClass="divide-y text-center"> 
            <TableBodyRow slot="row" let:item>
              <TableBodyCell class="bg-transparent">{(item as Item).id}</TableBodyCell>
              <TableBodyCell class="bg-transparent">{(item as Item).lastname}</TableBodyCell>
              <TableBodyCell class="bg-transparent">{(item as Item).firstname}</TableBodyCell>
              <TableBodyCell class="bg-transparent">{(item as Item).familyrole}</TableBodyCell>
                <TableBodyCell>
                    <Button 
                        style="background-color: #47663B" href="/MemberProfile" class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                        View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                    </Button>
                </TableBodyCell>
           </TableBodyRow>
        </TableBody>
    </Table>
</div>
