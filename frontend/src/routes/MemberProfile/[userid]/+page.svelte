<script lang="ts">
  import NavBar from '$lib/NavBar.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { Label, Input, InputAddon, ButtonGroup, Select, Helper, Radio } from 'flowbite-svelte';
  import { UserCircleSolid, MapPinAltSolid } from 'flowbite-svelte-icons';
  import { Datepicker } from 'flowbite-svelte';
  import { Modal } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  let formModal = false;


  interface Member {
      userid?: number;
      firstname?: string;
      lastname?: string;
      middlename?: string;
      birthday?: Date | null;
      sex?: string;
      contactnumber?: string;
      purok?: string;
      address?: string;
      familyrole?: string;
      fathername?: string;
      mothername?: string;
      philhealth?: string;
      philmember?: string;
      philDM?: string;
      philbday?: Date | null;
  }

  let userid: string = $page.params.userid;
  let member: Member | null = null;
  let isLoading = true;

  onMount(async () => {
      try {
          const response = await fetch(`https://6741e0ebe4647499008f1a58.mockapi.io/bio/${userid}`);
          if (response.ok) {
              member = await response.json();
          } else {
              console.error('Failed to fetch member data');
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
          isLoading = false;
      }
  });

  let errors = {
      firstname: '',
      lastname: '',
      middlename: '',
      birthday: '',
      fathername: '',
      mothername: '',
      contactnumber: '',
      sex: '',
      purok: '',
      address: '',
      familyrole: '',
      philhealth: '',
      philDM: '',
      philmember: '',
      philbday: '',
  };

  const validateForm = () => {
      let valid = true;

      if (!member?.firstname) {
          errors.firstname = 'Firstname is required';
          valid = false;
      } else {
          errors.firstname = '';
      }

      if (!member?.lastname) {
        errors.lastname = 'Lastname is required';
        valid = false;
    } else {
        errors.lastname = '';
    }

    if (!member?.middlename) {
        errors.middlename = 'Middlename is required';
        valid = false;
    } else {
        errors.middlename = '';
    }

    if (!member?.birthday) {
        errors.birthday = 'Birthday is required';
        valid = false;
    } else {
        errors.birthday = '';
    }

    if (!member?.sex) {
        errors.sex = 'Sex is required';
        valid = false;
    } else {
        errors.sex = '';
    }

    if (!member?.contactnumber) {
        errors.contactnumber = 'Contact number is required';
        valid = false;
    } else {
        errors.contactnumber = '';
    }

    if (!member?.purok) {
        errors.purok = 'Purok is required';
        valid = false;
    } else {
        errors.purok = '';
    }

    if (!member?.address) {
        errors.address = 'Address is required';
        valid = false;
    } else {
        errors.address = '';
    }

    if (!member?.familyrole) {
        errors.familyrole = 'Family role is required';
        valid = false;
    } else {
        errors.familyrole = '';
    }

    if (!member?.fathername) {
        errors.fathername = 'Father\'s name is required';
        valid = false;
    } else {
        errors.fathername = '';
    }

    if (!member?.mothername) {
        errors.mothername = 'Mother\'s name is required';
        valid = false;
    } else {
        errors.mothername = '';
    }

    if (!member?.philhealth) {
        errors.philhealth = 'PhilHealth is required';
        valid = false;
    } else {
        errors.philhealth = '';
    }

    if (!member?.philmember) {
        errors.philmember = 'PhilHealth member status is required';
        valid = false;
    } else {
        errors.philmember = '';
    }

    if (!member?.philDM) {
        errors.philDM = 'PhilHealth dependent member status is required';
        valid = false;
    } else {
        errors.philDM = '';
    }

    if (!member?.philbday) {
        errors.philbday = 'PhilHealth birthday is required';
        valid = false;
    } else {
        errors.philbday = '';
    }


      // Validate other fields similarly...

      return valid;
  };

  const handleSubmit = () => {
      if (validateForm()) {
          alert('Form submitted successfully');
      } else {
          alert('Please fill out the form correctly');
      }
  };

  let philhealth = [
        {value: 'WithPhilhealth', name: 'With Philhealth'},
        {value: 'NoPhilhealth', name: 'No Philhealth'}
    ];
  
    let familyrole = [
      { value: 'Father', name: 'Father' },
      { value: 'Mother', name: 'Mother' },
      { value: 'Child', name: 'Child' },
    ];

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


    type Item = {
    id: number;
    dateTime: string;
    age: number;
    wt: string; // Weight
    ht: string; // Height
    bp: string; // Blood Pressure
    temp: string; // Temperature
    complaints: string;
    diagnosis: string;
    physicianDirections: string;
    };

    
    // Define the data
    let items: Item[] = [
    { id: 1, dateTime: '2024-11-19 10:00', age: 45, wt: '70kg', ht: '175cm', bp: '120/80', temp: '36.7°C', complaints: 'Headache', diagnosis: 'Migraine', physicianDirections: 'Take prescribed medication' },
    { id: 2, dateTime: '2024-11-18 14:00', age: 40, wt: '65kg', ht: '160cm', bp: '110/70', temp: '36.5°C', complaints: 'Fatigue', diagnosis: 'Anemia', physicianDirections: 'Increase iron intake' },
    { id: 3, dateTime: '2024-11-17 16:30', age: 20, wt: '55kg', ht: '168cm', bp: '115/75', temp: '37.0°C', complaints: 'Cough', diagnosis: 'Common Cold', physicianDirections: 'Stay hydrated and rest' },
    { id: 4, dateTime: '2024-11-16 09:15', age: 50, wt: '80kg', ht: '180cm', bp: '130/85', temp: '37.2°C', complaints: 'Back Pain', diagnosis: 'Muscle Strain', physicianDirections: 'Apply heat and rest' }
];

let datetime = '';
  let age = '';
  let weight = '';
  let height = '';
  let bp = '';
  let temp = '';  
  let complaints = '';
  let diagnosis = '';
  let physiciansDirections = '';
</script>

<NavBar/>
<main>
  {#if isLoading}
      <p>Loading member data...</p>
  {:else if member}
  <div class="relative">
    <div class="bg-white mx-auto absolute left-0 right-0 p-5 rounded-lg shadow-md max-w-8xl h-100">
        <div class="grid grid-cols-4 gap-6">
        <!-- First Name -->
        <div class="mb-1">
          <Label for="firstname" class="block mb-2">First Name</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
              <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </InputAddon>
            <Input id="firstname" bind:value={member.firstname} placeholder="Dela Cruz" />
          </ButtonGroup>
          {#if errors.firstname}
            <Helper class="mt-2" color="red">{errors.firstname}</Helper>
          {/if}
        </div>
  
        <!-- Last Name -->
        <div class="mb-1">
          <Label for="lastname" class="block mb-2">Last Name</Label>
          <ButtonGroup class="w-full">
            <Input id="lastname" bind:value={member.lastname} placeholder="Juan" />
          </ButtonGroup>
          {#if errors.lastname}
            <Helper class="mt-2" color="red">{errors.lastname}</Helper>
          {/if}
        </div>
  
        <!-- Middle Name -->
        <div class="mb-1">
          <Label for="middlename" class="block mb-2">Middle Name</Label>
          <ButtonGroup class="w-full">
            <Input id="middlename" bind:value={member.middlename} placeholder="Montez" />
          </ButtonGroup>
          {#if errors.middlename}
            <Helper class="mt-2" color="red">{errors.middlename}</Helper>
          {/if}
        </div>
  
        <!-- Birthday -->
        <div class="mb-1">
          <Label for="landmark" class="block mb-2">Birthday</Label>
            <Datepicker bind:value={member.birthday}/>
            {#if errors.birthday}
              <Helper class="mt-2" color="red">{errors.birthday}</Helper>
            {/if}
        </div>

        <!--Father's Name-->
        <div class="mb-1">
          <Label for="fathername" class="block mb-2">Father's Name</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
                <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </InputAddon>
            <Input id="fathername" bind:value={member.fathername} placeholder="Full Name" />
          </ButtonGroup>
          {#if errors.fathername}
            <Helper class="mt-2" color="red">{errors.fathername}</Helper>
          {/if}
        </div>

         <!--Mother's Name-->
         <div class="mb-1">
            <Label for="mothername" class="block mb-2">Mother's Name</Label>
            <ButtonGroup class="w-full">
              <InputAddon>
                  <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </InputAddon>
              <Input id="mothername" bind:value={member.mothername} placeholder="Full Name" />
            </ButtonGroup>
            {#if errors.mothername}
              <Helper class="mt-2" color="red">{errors.mothername}</Helper>
            {/if}
          </div>

        <!--Contact Number -->
        <div class="mb-1">
            <Label for="contact-number" class="block mb-2">Contact Number</Label>
            <ButtonGroup class="w-full">
              <InputAddon>(+63)</InputAddon>
              <Input id="contact-number" bind:value={member.contactnumber} placeholder="Enter your number" />
            </ButtonGroup>
            {#if errors.contactnumber}
              <Helper class="mt-2" color="red">{errors.contactnumber}</Helper>
            {/if}
          </div>

        <!--Sex-->
        <div class="mt-4 flex items-center space-x-4">
            <Label for="sex" class="block">Sex: </Label>
            <div class="flex space-x-6">
              <Radio name="Male" value="Male" bind:group={member.sex}>Male</Radio>
              <Radio name="example1" value="2" bind:group={member.sex}>Female</Radio>
            </div>
            {#if errors.sex}
              <Helper class="mt-2" color="red">{errors.sex}</Helper>
            {/if}
          </div>  
        
        <!-- Purok -->
        <div class="mb-1">
        <Label>
            Purok
            <Select class="mt-2" bind:value={member.purok}>
              {#each purok as purok}
                <option value={purok.value}>{purok.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.purok}
            <Helper class="mt-2" color="red">{errors.purok}</Helper>
          {/if}
        </div>

     

         <!-- Address -->
         <div class="mb-1">
            <Label for="address" class="block mb-2">Address</Label>
            <ButtonGroup class="w-full">
                <InputAddon>
                    <MapPinAltSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </InputAddon>
              <Input id="address" bind:value={member.address} placeholder="Address" />
            </ButtonGroup>
            {#if errors.address}
              <Helper class="mt-2" color="red">{errors.address}</Helper>
            {/if}
          </div>
        
        <!--Family Role-->
        <Label>
            Family Role
            <Select class="mt-2" bind:value={member.familyrole}>
              {#each familyrole as role}
                <option value={role.value}>{role.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.familyrole}
            <Helper class="mt-2" color="red">{errors.familyrole}</Helper>
          {/if}
      
        <!--Philhealth-->
        <Label>
            Philhealth
            <Select class="mt-2" bind:value={member.philhealth}>
              {#each philhealth as phil}
                <option value={phil.value}>{phil.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.philhealth}
            <Helper class="mt-2" color="red">{errors.philhealth}</Helper>
          {/if}

        <!--With Philhealth-->
        {#if member.philhealth === 'WithPhilhealth'}
            <div class="-mt-1">
              <Label for="philmember" class="block mb-2">Philhealth Member:</Label>
              <Input id="other-assistance" bind:value={member.philmember} placeholder="Philhealth Member" />
              {#if errors.philmember}
              <Helper class="mt-2" color="red">{errors.philmember}</Helper>
            {/if}
            </div>
            <div class="-mt-1">
                <Label for="philbday" class="block mb-2">Member's Birthday</Label>
                <Datepicker bind:value={member.philbday}/>
                {#if errors.philbday}
              <Helper class="mt-2" color="red">{errors.philbday}</Helper>
            {/if}
            </div>
            <div class="-mt-1">
                <div class="mt-4 flex items-center space-x-4">
                    <Label for="philDM" class="block">Status: </Label>
                    <div class="flex space-x-6">
                      <Radio name="Member" value="Member" bind:group={member.philDM}>Member</Radio>
                      <Radio name="Dependent" value="Dependent" bind:group={member.philDM}>Dependent</Radio>
                      {#if errors.philDM}
              <Helper class="mt-2" color="red">{errors.philDM}</Helper>
            {/if}
                    </div>
                  </div>   
            </div>
          {/if}
          
  </div>

<!--Buttons-->
<div class="mt-10 flex justify-left space-x-4">
  <button on:click={() => (formModal = true)} class="text-white rounded-full px-6 py-3 bg-green-950">
      Add Visit &rarr;
  </button>
  <button class="text-white rounded-full px-6 py-3 bg-green-950">
    Update Profile &rarr;
  </button>
  <button class="text-white rounded-full px-6 py-3 bg-green-950">
    Archive Profile &rarr;
  </button>
</div>

<!--Table Here--> 
<div class="mt-10 relative justify-center items-center z-0">

  <Table
      {items}
  >
      <TableHead class="bg-amber-300">
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Date/Time</TableHeadCell>
          <TableHeadCell>Age</TableHeadCell>
          <TableHeadCell>WT</TableHeadCell>
          <TableHeadCell>HT</TableHeadCell>
          <TableHeadCell>BP</TableHeadCell>
          <TableHeadCell>Temp</TableHeadCell>
          <TableHeadCell>Complaints</TableHeadCell>
          <TableHeadCell>Diagnosis</TableHeadCell>
          <TableHeadCell>Physician's Directions</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
          <TableBodyRow slot="row" let:item >
              <TableBodyCell>{(item as Item).id}</TableBodyCell>
              <TableBodyCell>{(item as Item).dateTime}</TableBodyCell>
              <TableBodyCell>{(item as Item).age}</TableBodyCell>
              <TableBodyCell>{(item as Item).wt}</TableBodyCell>
              <TableBodyCell>{(item as Item).ht}</TableBodyCell>
              <TableBodyCell>{(item as Item).bp}</TableBodyCell>
              <TableBodyCell>{(item as Item).temp}</TableBodyCell>
              <TableBodyCell>{(item as Item).complaints}</TableBodyCell>
              <TableBodyCell>{(item as Item).diagnosis}</TableBodyCell>
              <TableBodyCell>{(item as Item).physicianDirections}</TableBodyCell>
  
          </TableBodyRow>
      </TableBody>
  </Table>
</div>
</div>
</div>
{/if}
</main>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
<form class="flex flex-col space-y-6" action="#">
<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adding Visitation</h3>
<!-- Date/Time -->
<div class="mb-1">
<Label for="datetime" class="block mb-2">Date/Time</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="datetime" bind:value={datetime} placeholder="MM/DD/YYYY HH:MM" />
</ButtonGroup>
</div>

<!-- Age -->
<div class="mb-1">
<Label for="age" class="block mb-2">Age</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="age" bind:value={age} placeholder="Enter Age" />
</ButtonGroup>
</div>

<!-- WT -->
<div class="mb-1">
<Label for="weight" class="block mb-2">WT</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="weight" bind:value={weight} placeholder="Enter Weight (kg)" />
</ButtonGroup>
</div>

<!-- HT -->
<div class="mb-1">
<Label for="height" class="block mb-2">HT</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="height" bind:value={height} placeholder="Enter Height (cm)" />
</ButtonGroup>
</div>

<!-- BP -->
<div class="mb-1">
<Label for="bp" class="block mb-2">BP</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="bp" bind:value={bp} placeholder="Enter Blood Pressure" />
</ButtonGroup>
</div>

<!-- Temp -->
<div class="mb-1">
<Label for="temp" class="block mb-2">Temp</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="temp" bind:value={temp} placeholder="Enter Temperature (°C)" />
</ButtonGroup>
</div>

<!-- Complaints -->
<div class="mb-1">
<Label for="complaints" class="block mb-2">Complaints</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="complaints" bind:value={complaints} placeholder="Enter Complaints" />
</ButtonGroup>
</div>

<!-- Diagnosis -->
<div class="mb-1">
<Label for="diagnosis" class="block mb-2">Diagnosis</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input id="diagnosis" bind:value={diagnosis} placeholder="Enter Diagnosis" />
</ButtonGroup>
</div>

<!-- Physician's Directions -->
<div class="mb-1">
<Label for="physiciansDirections" class="block mb-2">Physician's Directions</Label>
<ButtonGroup class="w-full">
<InputAddon>
</InputAddon>
<Input
id="physiciansDirections"
bind:value={physiciansDirections}
placeholder="Enter Directions"
/>
</ButtonGroup>
</div>

<!--Buttons-->
<div class="mt-5 flex justify-left space-x-4">
    <button class="text-white rounded-full px-6 py-3 bg-green-950">
        Add Visit &rarr;
    </button>    
</div>

</form>
</Modal>




