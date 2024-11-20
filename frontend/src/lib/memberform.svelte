<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Label, Input, InputAddon, ButtonGroup, Select, Textarea, Helper, Radio } from 'flowbite-svelte';
    import { UserCircleSolid, MapPinAltSolid, LandmarkSolid, ProfileCardSolid } from 'flowbite-svelte-icons';
    import { Datepicker, P } from 'flowbite-svelte';
    import { Button, Dropdown, DropdownItem} from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import Footer from "$lib/footer.svelte";


    let group1 = "Family Role";
    
    let firstname = '';
    let lastname = '';
    let middlename = '';
    let birthday: Date | null = null;
    let sex = '';
    let mothername = '';
    let fathername = '';
    let contactnumber = '';
    let selectedpurok = '';
    let selectedrole = '';
    let address = '';
    let landmark = '';
    let selected: string = '';
    let selectedDate: Date | null = null;
  
    let philmember = '';
    let philbday: Date | null = null;
    let philDM = '';

  
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

  
  
    let errors = {
      firstname: '',
      lastname: '',
      middlename: '',
      birthday: '',
      mothername: '',
      fathername: '',
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
  
      if (!firstname) {
        errors.firstname = 'Firstname is required';
        valid = false;
      } else {
        errors.firstname = '';
      }

      if (!lastname) {
        errors.lastname = 'Lastname is required';
        valid = false;
      } else {
        errors.lastname = '';
      }

      if (!middlename) {
        errors.middlename = 'Middlename is required';
        valid = false;
      } else {
        errors.middlename = '';
      }

      if (!birthday) {
        errors.birthday = 'Birthdate is required';
        valid = false;
      } else {
        errors.birthday = '';
      }

      if (!fathername) {
        errors.fathername = 'Name of the Father is required';
        valid = false;
      } else {
        errors.fathername = '';
      }

      if (!mothername) {
        errors.mothername = 'Name of the Mother is required';
        valid = false;
      } else {
        errors.mothername = '';
      }
  
      if (!contactnumber) {
        errors.contactnumber = 'Contact number is required';
        valid = false;
      } else if (!/^\d{10}$/.test(contactnumber)) {
        errors.contactnumber = 'Enter a valid 10-digit contact number';
        valid = false;
      } else {
        errors.contactnumber = '';
      }

      if (!sex) {
        errors.sex = 'This section is required';
        valid = false;
      } else {
        errors.sex = '';
      }

      if (!purok) {
        errors.purok = 'This section is required';
        valid = false;
      } else {
        errors.purok = '';
      }
  
      if (!address) {
        errors.address = 'Adress is required';
        valid = false;
      } else {
        errors.address = '';
      }

      if (!familyrole) {
        errors.familyrole = 'Family Role is required';
        valid = false;
      } else {
        errors.familyrole = '';
      }
  
      if (!philhealth) {
        errors.philhealth = 'This section is required';
        valid = false;
      } else {
        errors.philhealth = '';
      }
  
      if (!philDM) {
        errors.philDM = 'This section is required';
        valid = false;
      } else {
        errors.philDM = '';
      }

      if (!philmember) {
        errors.philmember = 'This section is required';
        valid = false;
      } else {
        errors.philmember = '';
      }

      if (!philbday) {
        errors.philbday = 'This section is required';
        valid = false;
      } else {
        errors.philbday = '';
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
  
  <main class="relative">
    <img src="assets/bg1.png" class="absolute inset-0  object-cover opacity-30 z-0" alt="bg" />

    <div class="bg-white mt-2  mx-auto absolute top-10 left-0 right-0 p-5 rounded-lg shadow-md max-w-2xl h-100 z-10">
        <div class="grid grid-cols-2 gap-6">
        <!-- First Name -->
        <div class="mb-1">
          <Label for="firstname" class="block mb-2">First Name</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
              <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </InputAddon>
            <Input id="firstname" bind:value={firstname} placeholder="Dela Cruz" />
          </ButtonGroup>
          {#if errors.firstname}
            <Helper class="mt-2" color="red">{errors.firstname}</Helper>
          {/if}
        </div>
  
        <!-- Last Name -->
        <div class="mb-1">
          <Label for="lastname" class="block mb-2">Last Name</Label>
          <ButtonGroup class="w-full">
            <Input id="lastname" bind:value={lastname} placeholder="Juan" />
          </ButtonGroup>
          {#if errors.lastname}
            <Helper class="mt-2" color="red">{errors.lastname}</Helper>
          {/if}
        </div>
  
        <!-- Middle Name -->
        <div class="mb-1">
          <Label for="middlename" class="block mb-2">Middle Name</Label>
          <ButtonGroup class="w-full">
            <Input id="middlename" bind:value={middlename} placeholder="Montez" />
          </ButtonGroup>
          {#if errors.middlename}
            <Helper class="mt-2" color="red">{errors.middlename}</Helper>
          {/if}
        </div>
  
        <!-- Birthday -->
        <div class="mb-1">
          <Label for="landmark" class="block mb-2">Birthday</Label>
            <Datepicker bind:value={birthday}/>
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
            <Input id="fathername" bind:value={fathername} placeholder="Full Name" />
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
              <Input id="mothername" bind:value={mothername} placeholder="Full Name" />
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
              <Input id="contact-number" bind:value={contactnumber} placeholder="Enter your number" />
            </ButtonGroup>
            {#if errors.contactnumber}
              <Helper class="mt-2" color="red">{errors.contactnumber}</Helper>
            {/if}
          </div>

        <!--Sex-->
        <div class="mt-4 flex items-center space-x-4">
            <Label for="sex" class="block">Sex: </Label>
            <div class="flex space-x-6">
              <Radio name="Male" value="Male" bind:group={sex}>Male</Radio>
              <Radio name="example1" value="2" bind:group={sex}>Female</Radio>
            </div>
            {#if errors.sex}
              <Helper class="mt-2" color="red">{errors.sex}</Helper>
            {/if}
          </div>  
        
        <!-- Purok -->
        <div class="mb-1">
        <Label>
            Purok
            <Select class="mt-2" bind:value={selectedpurok}>
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
              <Input id="address" bind:value={address} placeholder="Address" />
            </ButtonGroup>
            {#if errors.address}
              <Helper class="mt-2" color="red">{errors.address}</Helper>
            {/if}
          </div>
        
        <!--Family Role-->
        <Label>
            Family Role
            <Select class="mt-2" bind:value={selectedrole}>
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
            <Select class="mt-2" bind:value={selected}>
              {#each philhealth as phil}
                <option value={phil.value}>{phil.name}</option>
              {/each}
            </Select>
          </Label>
          {#if errors.philhealth}
            <Helper class="mt-2" color="red">{errors.philhealth}</Helper>
          {/if}

        <!--With Philhealth-->
        {#if selected === 'WithPhilhealth'}
            <div class="-mt-1">
              <Label for="philmember" class="block mb-2">Philhealth Member:</Label>
              <Input id="other-assistance" bind:value={philmember} placeholder="Philhealth Member" />
              {#if errors.philmember}
              <Helper class="mt-2" color="red">{errors.philmember}</Helper>
            {/if}
            </div>
            <div class="-mt-1">
                <Label for="philbday" class="block mb-2">Member's Birthday</Label>
                <Datepicker bind:value={philbday}/>
                {#if errors.philbday}
              <Helper class="mt-2" color="red">{errors.philbday}</Helper>
            {/if}
            </div>
            <div class="-mt-1">
                <div class="mt-4 flex items-center space-x-4">
                    <Label for="philDM" class="block">Status: </Label>
                    <div class="flex space-x-6">
                      <Radio name="Member" value="Member" bind:group={philDM}>Member</Radio>
                      <Radio name="Dependent" value="Dependent" bind:group={philDM}>Dependent</Radio>
                      {#if errors.philDM}
              <Helper class="mt-2" color="red">{errors.philDM}</Helper>
            {/if}
                    </div>
                  </div>   
            </div>
          {/if}
      </div>

    <!--Buttons-->
    <div class="mt-4 flex justify-center space-x-4">
        <Button href="/FamilyMember" class="text-white rounded-full px-6 py-3 bg-green-950">
            Cancel &rarr;
        </Button>
        <button on:click={handleSubmit} class="text-white rounded-full px-6 py-3 bg-green-950">
          Submit &rarr;
        </button>
      </div>
    </div>


  </main>
  
  