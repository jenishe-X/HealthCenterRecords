<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Label, Input, InputAddon, ButtonGroup, Select, Textarea, Helper } from 'flowbite-svelte';
    import { UserCircleSolid, MapPinAltSolid, LandmarkSolid } from 'flowbite-svelte-icons';
    import { Datepicker, P } from 'flowbite-svelte';
    
    let name = '';
    let contactNumber = '';
    let location = '';
    let landmark = '';
    let otherAssistance = '';
    let selected: string = '';
    let selectedDate: Date | null = null;
  
    let textareaprops = {
      id: 'description',
      name: 'description',
      label: 'description',
      rows: 2,
      placeholder: 'Optional - You may describe the incident...'
    };
  
    let assistance = [
      { value: 'Medical Aid', name: 'Medical Aid' },
      { value: 'Rescue', name: 'Rescue' },
      { value: 'Fire Incident', name: 'Fire Incident' },
      { value: 'Road Accident', name: 'Road Accident' },
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
  
      if (selected === 'Other' && !otherAssistance) {
        errors.otherAssistance = 'Please specify the assistance';
        valid = false;
      } else {
        errors.otherAssistance = '';
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
    <div class="bg-white mx-auto absolute top-10 left-0 right-0 p-5 rounded-lg shadow-md max-w-3xl z-10">
      <div class="grid grid-cols-3 gap-6">
        <!-- Name -->
        <div class="mb-1">
          <Label for="name" class="block mb-2">Name</Label>
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
  
        <!-- Contact Number -->
        <div class="mb-1">
          <Label for="contact-number" class="block mb-2">First Name</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
                <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </InputAddon>
            <Input id="contact-number" bind:value={contactNumber} placeholder="Juan" />
          </ButtonGroup>
          {#if errors.contactNumber}
            <Helper class="mt-2" color="red">{errors.contactNumber}</Helper>
          {/if}
        </div>
  
        <!-- Location -->
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




      </div>
    </div>
  </main>
  