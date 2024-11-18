<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline, CirclePlusSolid } from 'flowbite-svelte-icons';

    type Item = {
        id: number;
        lastname: string;
        firstname: string;
        familyrole: string;
    };

    // Define the data
    let items: Item[] = [
        { id: 1, firstname: 'Bobby', lastname: 'Jones', familyrole: 'Father' },
        { id: 2, firstname: 'Abie', lastname: 'Jones', familyrole: 'Mother' },
        { id: 3, firstname: 'Cathy', lastname: 'Jones', familyrole: 'Child 1' },
        { id: 4, firstname: 'Dale', lastname: 'Jones', familyrole: 'Child 2' }
    ];

    // Define a function to handle viewing an item
    function viewItem(item: Item) {
        alert(`Viewing details for ${item.lastname}`);
        // You can add more logic for modal or navigation here
    }
</script>


<div class="relative">
    <!-- Container for the button -->
    <div class="absolute right-40" style="top: 30px">
      <Button 
        class="mx-6 z-10 bg-green-950 text-white py-2 px-5 rounded hover:bg-green-300 transition-all duration-200 ease-in-out">
        Add Family Member 
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
         item.id.toString().includes(searchTerm)
        }
    >
        <TableHead class="bg-amber-300">
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Family Role</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell> <!-- New column for actions -->
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            <TableBodyRow slot="row" let:item >
                <TableBodyCell>{(item as Item).id}</TableBodyCell>
                <TableBodyCell>{(item as Item).firstname}</TableBodyCell>
                <TableBodyCell>{(item as Item).lastname}</TableBodyCell>
                <TableBodyCell>{(item as Item).familyrole}</TableBodyCell>
                <TableBodyCell>
                    <Button 
                        style="background-color: #47663B" class="text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                        View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                    </Button>
                </TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
</div>
