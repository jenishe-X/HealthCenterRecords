<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button, ButtonGroup, Input, InputAddon } from 'flowbite-svelte';
    import { ArrowRightOutline, CirclePlusSolid, SearchOutline } from 'flowbite-svelte-icons';
    import { navigate } from 'svelte-routing';
    import { Router, Route, Link } from 'svelte-routing';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import NavBar from '$lib/NavBar.svelte';

    


    interface Family {
    familynumberid?: number;
	userid?: number; 
    firstname?: string;
    lastname?: string;
  	familyrole?: string;

  }

  let families: Family[] = [];
  let searchTerm: string = '';
//   let familynumberid: string = $page.params.familynumberid;
  let loading: boolean = true; 

//   onMount(async () => {
//         try {
//             const response = await fetch(`http://localhost/api/member/${familynumberid}`);
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log(data);
                

//                 // Assign the payload data to visits
//                 if (data.payload && data.payload.length > 0) {
//                     families = data.payload.map((item: any): Family => ({
//                         familynumberid: item.familynumberid,
//                         userid: item.userid,
//                         firstname: item.firstname,
//                         lastname: item.lastname,
//                         familyrole: item.familyrole,

//                     }));
//                 } else {
//                     console.error('No visitation data found in payload');
//                 }
//             } else {
//                 console.error('Failed to fetch visitation data');
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         } finally {
//             loading = false;
//         }
//     });

let familynumberid: string = $page.params.familynumberid;
console.log('familynumberid:', familynumberid);  // Check if it's correctly set

onMount(async () => {
    try {
        const response = await fetch(`http://localhost/api/member/${familynumberid}`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            if (data.payload && data.payload.length > 0) {
                    families = data.payload.map((item: any): Family => ({
                        familynumberid: item.familynumberid,
                        userid: item.userid,
                        firstname: item.firstname,
                        lastname: item.lastname,
                        familyrole: item.familyrole,
                    }));
                } else {
                    console.error('No visitation data found in payload');
                }

        } else {
            console.error('Failed to fetch visitation data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading = false;
    }
});


 

  
  
</script>

<NavBar/>
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
        <Input id="firstname" bind:value={searchTerm} placeholder="Search Lastname or Family number" />
      </ButtonGroup>
   
    <Table
       
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
                const familynumberid = family?.familynumberid?.toString() || ''; 
                return lastname.includes(searchTerm.toLowerCase()) || familynumberid.includes(searchTerm);
              }) as family}   
            <TableBodyRow>
                <TableBodyCell>{family.userid}</TableBodyCell>
                <TableBodyCell>{family.firstname}</TableBodyCell>
                <TableBodyCell>{family.lastname}</TableBodyCell>
                <TableBodyCell>{family.familyrole}</TableBodyCell>
                <TableBodyCell>
                  <Button
                  on:click={() => window.location.href = `/FamilyMember/${family.userid}`}
                  style="background-color: #47663B"
                  class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out"
                >
                  View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                </Button>
                
                </TableBodyCell>
            </TableBodyRow>
            {/each}
        </TableBody>
    </Table>

   
</div>
