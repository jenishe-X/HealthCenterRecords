<script lang="ts">
     import { Card, Button } from 'flowbite-svelte';
     import { ArrowRightOutline } from 'flowbite-svelte-icons';
     import { onMount } from 'svelte';
     import { page } from '$app/stores';
     import { goto } from '$app/navigation';


//      interface Member {
//         familynumberid: number;
//         userid?: number;
//         firstname?: string;
//         lastname?: string;
//         middlename?: string;
//         birthday?: Date | null;
//         sex?: string;
//         contactnumber?: string;
//         purok?: string;
//         address?: string;
//         familyrole?: string;
//         fathername?: string;
//         mothername?: string;
//         philhealth?: string;
//         philmember?: string;
//         philDM?: string;
//         philbday?: Date | null;
//     }

  
//     let purok: string = $page.params.purok;
//     let member: Member | null = null;
//     let isLoading = true;


  
  
//     onMount(async () => {
//     try {
//         const response = await fetch(`http://localhost/api/purok/${purok}`);
//         if (response.ok) {
//             const data = await response.json(); // Parse the JSON
//             console.log(data); // Inspect the full response to debug
            
//             // Access the payload array
//             if (data.payload && data.payload.length > 0) {
//                 member = data.payload[0]; // Get the first member object
//                 console.log(member); // Logs the actual member details
//             } else {
//                 console.error('No member data found in payload');
//             }
//         } else {
//             console.error('Failed to fetch member data');
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     } finally {
//         isLoading = false;
//     }
// });

</script>

<main class="bg-amber-300 min-h-screen">
    <div class="relative">
        <!-- Background Logo -->
        <!-- <img src="assets/bglogo2.png" class="absolute inset-0  object-cover opacity-30 z-0" alt="bglogo2" /> -->

        <!-- Cards Container -->
        <div class="relative grid grid-cols-4 gap-6 p-20 z-10">
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 1-A</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit" 
            on:click={() => window.location.href = `/Purok/1-A`}
            >
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 1-B</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950"
            on:click={() => window.location.href = `/Purok/1-B`}>
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 2</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 3-A</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 3-B</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 3-C</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 3-D</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 3-E</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 3-F</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 4-A</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 4-B</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 4-C</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 4-D</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 4-E</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-A1</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-A</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-B</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-C</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-D</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-E</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 5-F</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-A</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-A EXT.</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-B1</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6B2-A</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-C1</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-C2</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-D</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 6-E</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="bg-green-950 w-fit">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Purok 7</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button class="w-fit bg-green-950">
              Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </Card>
          
        </div>
      </div>
      
</main>


  
  