<script>
    import { Card, Button, Toggle } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
  </script>
  
  <div class="flex items-center justify-center space-x-4 mt-20 p-20">
    <Card img="/assets/card1.png" class="bg-amber-300">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Medical Records <br> </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Comprehensive documents that store a patient's health history, treatments, and care to ensure accurate and continuous healthcare delivery.</p>
      <Button class="bg-green-950" href="/Purok">
        Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
    <Card img="/assets/card1.png" class="bg-amber-300">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Family Number</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Refers to including a designated contact number of a family member for emergency or support purposes in a medical or personal information record.</p>
        <Button class="bg-green-950">
          Check <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
      </Card>
      <Card img="/assets/card1.png" class="bg-amber-300">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Button class="bg-green-950">
          Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
      </Card>
      <Card img="/assets/card1.png" class="bg-amber-300">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Button class="bg-green-950">
          Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
      </Card>
  </div>
  