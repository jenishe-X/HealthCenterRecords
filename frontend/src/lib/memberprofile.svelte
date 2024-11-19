<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Label, Input, InputAddon, ButtonGroup, Select, Textarea, Helper, Radio } from 'flowbite-svelte';
    import { UserCircleSolid, MapPinAltSolid, LandmarkSolid, ProfileCardSolid } from 'flowbite-svelte-icons';
    import { Datepicker, P } from 'flowbite-svelte';
    import { Button, Dropdown, DropdownItem} from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import Footer from "$lib/footer.svelte";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';



    let group1 = "Family Role";
    
    let name = '';
    let contactNumber = '';
    let location = '';
    let landmark = '';
    let selected: string = '';
    let selectedDate: Date | null = null;
    let selectedValue = '';
    let philmember = '';
    let philbday: Date | null = null;
    let philDM = '';

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


  
    let textareaprops = {
      id: 'description',
      name: 'description',
      label: 'description',
      rows: 2,
      placeholder: 'Optional - You may describe the incident...'
    };

    let philhealth = [
        {value: 'WithPhilhealth', name: 'With Philhealth'},
        {value: 'NoPhilhealth', name: 'No Philhealth'}
    ];
  
    let familyrole = [
      { value: 'Father', name: 'Father' },
      { value: 'Mother', name: 'Mother' },
      { value: 'Child-1', name: 'Child-1' },
      { value: 'Child-2', name: 'Child-2' },
      { value: 'Other', name: 'Other' }
    ];
  
    let errors = {
      name: '',
      contactNumber: '',
      location: '',
      landmark: '',
      selected: '',
      otherAssistance: ''
    };
  
    const validateForm = () => {
      let valid = true;
  
      if (!name) {
        errors.name = 'Name is required';
        valid = false;
      } else {
        errors.name = '';
      }
  
      if (!contactNumber) {
        errors.contactNumber = 'Contact number is required';
        valid = false;
      } else if (!/^\d{10}$/.test(contactNumber)) {
        errors.contactNumber = 'Enter a valid 10-digit contact number';
        valid = false;
      } else {
        errors.contactNumber = '';
      }
  
      if (!location) {
        errors.location = 'Location is required';
        valid = false;
      } else {
        errors.location = '';
      }
  
      if (!landmark) {
        errors.landmark = 'Landmark is required';
        valid = false;
      } else {
        errors.landmark = '';
      }
  
      if (!selected) {
        errors.selected = 'Please select an option';
        valid = false;
      } else {
        errors.selected = '';
      }
  
      return valid;
    };
  
    // Form submission handler
    const handleSubmit = () => {
      if (validateForm()) {
        alert('Form submitted successfully');
      } else {
        alert('Please fill out the form correctly');
      }
    };
  
  
  </script>
  
  
    <div class="bg-white mb-10 md:mb-20 mx-auto absolute top-10 left-0 right-0 p-5 rounded-lg shadow-md max-w-3xl h-100">
        <div class="grid grid-cols-4 gap-6">
        <!-- Last Name -->
        <div class="mb-1">
          <Label for="name" class="block mb-2">First Name</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
              <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </InputAddon>
            <Input id="name" bind:value={name} placeholder="Dela Cruz" />
          </ButtonGroup>
          {#if errors.name}
            <Helper class="mt-2" color="red">{errors.name}</Helper>
          {/if}
        </div>
  
        <!-- Last Name -->
        <div class="mb-1">
          <Label for="contact-number" class="block mb-2">Last Name</Label>
          <ButtonGroup class="w-full">
            <Input id="contact-number" bind:value={contactNumber} placeholder="Juan" />
          </ButtonGroup>
          {#if errors.contactNumber}
            <Helper class="mt-2" color="red">{errors.contactNumber}</Helper>
          {/if}
        </div>
  
        <!-- Middle Name -->
        <div class="mb-1">
          <Label for="location" class="block mb-2">Middle Name</Label>
          <ButtonGroup class="w-full">
            <Input id="location" bind:value={location} placeholder="Montez" />
          </ButtonGroup>
          {#if errors.location}
            <Helper class="mt-2" color="red">{errors.location}</Helper>
          {/if}
        </div>
  
        <!-- Birthdate -->
        <div class="mb-1">
          <Label for="landmark" class="block mb-2">Birthdate</Label>
            <Datepicker bind:value={selectedDate}/>
        </div>

         <!--Mother's Name-->
         <div class="mb-1">
            <Label for="contact-number" class="block mb-2">Mother's Name</Label>
            <ButtonGroup class="w-full">
              <InputAddon>
                  <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </InputAddon>
              <Input id="contact-number" bind:value={contactNumber} placeholder="Full Name" />
            </ButtonGroup>
            {#if errors.contactNumber}
              <Helper class="mt-2" color="red">{errors.contactNumber}</Helper>
            {/if}
          </div>

          <!--Father's Name-->
          <div class="mb-1">
            <Label for="contact-number" class="block mb-2">Father's Name</Label>
            <ButtonGroup class="w-full">
              <InputAddon>
                  <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </InputAddon>
              <Input id="contact-number" bind:value={contactNumber} placeholder="Full Name" />
            </ButtonGroup>
            {#if errors.contactNumber}
              <Helper class="mt-2" color="red">{errors.contactNumber}</Helper>
            {/if}
          </div>


        <!--Contact Number -->
        <div class="mb-1">
            <Label for="contact-number" class="block mb-2">Contact Number</Label>
            <ButtonGroup class="w-full">
              <InputAddon>(+63)</InputAddon>
              <Input id="contact-number" bind:value={contactNumber} placeholder="Enter your number" />
            </ButtonGroup>
            {#if errors.contactNumber}
              <Helper class="mt-2" color="red">{errors.contactNumber}</Helper>
            {/if}
          </div>

        <!--Sex-->
        <div class="mt-4 flex items-center space-x-4">
            <Label for="sex" class="block">Sex: </Label>
            <div class="flex space-x-6">
              <Radio name="example1" value="1" bind:group={selectedValue}>Male</Radio>
              <Radio name="example1" value="2" bind:group={selectedValue}>Female</Radio>
            </div>
          </div>  
        
        <!--Purok-->
        <Label>
            Purok
            <Select class="mt-2" bind:value={selected}>
              {#each philhealth as phil}
                <option value={phil.value}>{phil.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.selected}
            <Helper class="mt-2" color="red">{errors.selected}</Helper>
          {/if}

         <!-- Address -->
         <div class="mb-1">
            <Label for="contact-number" class="block mb-2">Address</Label>
            <ButtonGroup class="w-full">
                <InputAddon>
                    <MapPinAltSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </InputAddon>
              <Input id="contact-number" bind:value={contactNumber} placeholder="Address" />
            </ButtonGroup>
            {#if errors.contactNumber}
              <Helper class="mt-2" color="red">{errors.contactNumber}</Helper>
            {/if}
          </div>
        
        <!--Family Role-->
        <Label>
            Family Role
            <Select class="mt-2" bind:value={selected}>
              {#each familyrole as role}
                <option value={role.value}>{role.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.selected}
            <Helper class="mt-2" color="red">{errors.selected}</Helper>
          {/if}
      
        <!--Philhealth-->
        <Label>
            Philhealth
           
            <Select class="mt-2" bind:value={selected}>
              {#each philhealth as phil}
                <option value={phil.value}>{phil.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.selected}
            <Helper class="mt-2" color="red">{errors.selected}</Helper>
          {/if}

        <!--With Philhealth-->
        {#if selected === 'WithPhilhealth'}
            <div class="-mt-1">
              <Label for="other-assistance" class="block mb-2">Philhealth Member:</Label>
              <Input id="other-assistance" bind:value={philmember} placeholder="Philhealth Member" />
            </div>
            <div class="-mt-1">
                <Label for="landmark" class="block mb-2">Member's Birthday</Label>
                <Datepicker bind:value={selectedDate}/>
            </div>
            <div class="-mt-1">
                <div class="mt-4 flex items-center space-x-4">
                    <Label for="sex" class="block">Status: </Label>
                    <div class="flex space-x-6">
                      <Radio name="example1" value="1" bind:group={selectedValue}>Member</Radio>
                      <Radio name="example1" value="2" bind:group={selectedValue}>Dependent</Radio>
                    </div>
                  </div>   
            </div>
          {/if}
      </div>


      <!--Buttons-->
    <div class="mt-10 flex justify-left space-x-4">
        <button class="text-white rounded-full px-6 py-3 bg-green-950">
            Add Visit &rarr;
        </button>
        <button class="text-white rounded-full px-6 py-3 bg-green-950">
          Update Profile &rarr;
        </button>
        <button class="text-white rounded-full px-6 py-3 bg-green-950">
            Arcive Profile &rarr;
          </button>
    </div>

   
    
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

 


  
  