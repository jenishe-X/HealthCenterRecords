<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    // Define the father for items
    type Item = {
        id: number;
        lastname: string;
        father: string;
        purok: number;
    };

    // Define the data
    let items: Item[] = [
        { id: 1, lastname: 'Dela Cruz', father: 'Juan', purok: 2017 },
        { id: 2, lastname: 'Tolentino', father: 'Robert', purok: 2018 },
        { id: 3, lastname: 'Delos Santos', father: 'Bornok', purok: 2019 },
        { id: 4, lastname: 'Cerezo', father: 'Roben', purok: 2020 }
    ];

    // Define a function to handle viewing an item
    function viewItem(item: Item) {
        alert(`Viewing details for ${item.lastname}`);
        // You can add more logic for modal or navigation here
    }
</script>

<div class="relative justify-center items-center">
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
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Father's Name</TableHeadCell>
            <TableHeadCell>Purok</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell> <!-- New column for actions -->
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            <TableBodyRow slot="row" let:item >
                <TableBodyCell>{(item as Item).id}</TableBodyCell>
                <TableBodyCell>{(item as Item).lastname}</TableBodyCell>
                <TableBodyCell>{(item as Item).father}</TableBodyCell>
                <TableBodyCell>{(item as Item).purok}</TableBodyCell>
                <TableBodyCell>
                    <Button 
                        class="bg-green-950 text-white text-xs py-1 px-3 rounded hover:bg-green-800 transition-all duration-200 ease-in-out">
                        View <ArrowRightOutline class="w-3 h-3 ms-1 text-white" />
                    </Button>
                </TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
</div>
