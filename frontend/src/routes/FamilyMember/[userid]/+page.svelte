<script lang="ts">
    import NavBar from '$lib/NavBar.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { Label, Input, InputAddon, ButtonGroup, Select, Helper, Radio } from 'flowbite-svelte';
    import { UserCircleSolid, MapPinAltSolid } from 'flowbite-svelte-icons';
    import { Datepicker } from 'flowbite-svelte';
    import { Modal, Button } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Router, Route } from 'svelte-routing';
    import { ExclamationCircleOutline } from 'flowbite-svelte-icons';

    let popupModal = false;
    let formattedBirthday = '';
    let updateModal = false;
    let newModal = false;


 // Ensure member.birthday is a valid string and parse it
$: {
   if (member && member.birthday) {
      // Convert to string if it's not already a string
      const birthdayString = typeof member.birthday === 'string' ? member.birthday : String(member.birthday);

      // Try to parse the date string
      const parsedDate = Date.parse(birthdayString);

      if (!isNaN(parsedDate)) {
         // If valid, create a Date object and format it
         const date = new Date(parsedDate);
         formattedBirthday = date.toLocaleDateString('en-GB'); // Format as 'DD/MM/YYYY'
      } else {
         formattedBirthday = '';
      }
   } else {
      formattedBirthday = '';
   }
}

    let formModal = false;

    
  
    interface Member {
        familynumberid: number;
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

    interface Visitation {
        dateTime?: string;
        age?: string;
        wt?: string;
        ht?: string;
        bp?: string;
        temp?: string;
        complaints?: string;
        diagnosis?: string;
        physicianDirections?: string;
    }
  
    let userid: string = $page.params.userid;
    let member: Member | null = null;
    let isLoading = true;
    let visit: Visitation[] = [];

   
  
  
    onMount(async () => {
    try {
        const response = await fetch(`http://localhost/api/select/${userid}`);
        if (response.ok) {
            const data = await response.json(); // Parse the JSON
            console.log(data); // Inspect the full response to debug
            initialFormData = { ...data };  // Set initial data from the API
            formData = { ...data };  // Bind the form data to the fetched values
            
            // Access the payload array
            if (data.payload && data.payload.length > 0) {
                member = data.payload[0]; // Get the first member object
                console.log(member); // Logs the actual member details
            } else {
                console.error('No member data found in payload');
            }
        } else {
            console.error('Failed to fetch member data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        isLoading = false;
    }
});

 // Function to update member data
 async function updateMember() {
    try {
        // Define the member type
        const updatedFields: Record<string, any> = {}; // Create a dynamic object for updated fields

        // Loop through each key in the member object and add changed values
        for (let key in member) {
            if (member.hasOwnProperty(key)) {
                const typedKey = key as keyof Member;  // Explicitly type the key
                // Check if the value is not null or empty, then include it in updatedFields
                if (member[typedKey] !== null && member[typedKey] !== "") {
                    updatedFields[typedKey] = member[typedKey];
                }
            }
        }

        // If there are no changes, log and return
        if (Object.keys(updatedFields).length === 0) {
            console.log('No changes detected');
            return;  // Exit if no updates are present
        }

        // Send the PATCH request with the updated fields
        const response = await fetch(`http://localhost/api/memberprofile2/${userid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedFields) // Send only updated fields
        });

        // Check for successful response
        if (response.ok) {
            const updatedData = await response.json();
            console.log('Member updated successfully:', updatedData);
        } else {
            console.error('Failed to update member data');
        }
    } catch (error) {
        console.error('Error updating data:', error);
    }
}


onMount(async () => {
        try {
            const response = await fetch(`http://localhost/api/membervisitation/${userid}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);

                // Assign the payload data to visits
                if (data.payload && data.payload.length > 0) {
                    visit = data.payload.map((item: any): Visitation => ({
                        dateTime: item.dateTime,
                        age: item.age,
                        wt: item.wt,
                        ht: item.ht,
                        bp: item.bp,
                        temp: item.temp,
                        complaints: item.complaints,
                        diagnosis: item.diagnosis,
                        physicianDirections: item.physicianDirections,
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
            isLoading = false;
        }
    });

    let postvisitation: Visitation[] = [];




     // Initial object for new family data
    //  let newVisit = { 
    //   familynumberid: 0,
    //     userid: undefined,
    //     firstname: '',
    //     lastname: '',
    //     middlename: '',
    //     birthday: null, // Default to null for Date
    //     sex: '',
    //     contactnumber: '',
    //     purok: '',
    //     address: '',
    //     familyrole: '',
    //     fathername: '',
    //     mothername: '',
    //     philhealth: '',
    //     philmember: '',
    //     philDM: '',
    //     philbday: null, // Default to null for Date
    //  };



    let newVisit: {
    userid: string | null; // Explicitly allow null
    dateTime: string | null;
    age: number;
    wt: string;
    ht: string;
    bp: string;
    temp: string;
    complaints: string;
    diagnosis: string;
    physicianDirections: string;
} = {
    userid: null, // Initially null
    dateTime: null,
    age: 0,
    wt: '',
    ht: '',
    bp: '',
    temp: '',
    complaints: '',
    diagnosis: '',
    physicianDirections: '',
};
$: newVisit.userid = $page.params.userid ? String($page.params.userid) : null;
$: newVisit.wt = newVisit.wt && !newVisit.wt.endsWith('kg') ? newVisit.wt.replace(/kg$/, '').trim() + ' kg' : newVisit.wt;
$: newVisit.ht = newVisit.ht && !newVisit.ht.endsWith('cm') ? newVisit.ht.replace(/cm$/, '').trim() + ' cm' : newVisit.ht;
$: newVisit.temp = newVisit.temp && !newVisit.temp.endsWith('°C') ? newVisit.temp.replace(/°C$/, '').trim() + '°C' : newVisit.temp;





    async function addVisitation() {

    try {
        const response = await fetch("http://localhost/api/membervisitation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVisit),
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Added visitation:", result);

            // Ensure `postvisitation` is updated
            postvisitation = [...postvisitation, result];

            // Reset newVisit to default
            newVisit = {
              userid: newVisit.userid,
                dateTime: null,
                age: 0,
                wt: '',
                ht: '',
                bp: '',
                temp: '',
                complaints: '',
                diagnosis: '',
                physicianDirections: '',
            };

            alert("Form submitted successfully!");
        } else {
            console.error("Failed to post visitation:", response.status);
        }
    } catch (error) {
        console.error("Error posting data:", error);
    }
}




  
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

    // const validateVisit = () => {
    //     let valid = true;
  
    //     if (!visit?.dateTime) {
    //         errors.firstname = 'Firstname is required';
    //         valid = false;
    //     } else {
    //         errors.firstname = '';
    //     }
  
    //     if (!visit?.age) {
    //       errors.lastname = 'Lastname is required';
    //       valid = false;
    //   } else {
    //       errors.lastname = '';
    //   }
  
    //   if (!member?.middlename) {
    //       errors.middlename = 'Middlename is required';
    //       valid = false;
    //   } else {
    //       errors.middlename = '';
    //   }
  
    //   if (!member?.birthday) {
    //       errors.birthday = 'Birthday is required';
    //       valid = false;
    //   } else {
    //       errors.birthday = '';
    //   }
  
    //   if (!member?.sex) {
    //       errors.sex = 'Sex is required';
    //       valid = false;
    //   } else {
    //       errors.sex = '';
    //   }
  
    //   if (!member?.contactnumber) {
    //       errors.contactnumber = 'Contact number is required';
    //       valid = false;
    //   } else {
    //       errors.contactnumber = '';
    //   }
  
    //   if (!member?.purok) {
    //       errors.purok = 'Purok is required';
    //       valid = false;
    //   } else {
    //       errors.purok = '';
    //   }
  
    //   if (!member?.address) {
    //       errors.address = 'Address is required';
    //       valid = false;
    //   } else {
    //       errors.address = '';
    //   }
  
    //   if (!member?.familyrole) {
    //       errors.familyrole = 'Family role is required';
    //       valid = false;
    //   } else {
    //       errors.familyrole = '';
    //   }
  
    //   if (!member?.fathername) {
    //       errors.fathername = 'Father\'s name is required';
    //       valid = false;
    //   } else {
    //       errors.fathername = '';
    //   }
  
    //   if (!member?.mothername) {
    //       errors.mothername = 'Mother\'s name is required';
    //       valid = false;
    //   } else {
    //       errors.mothername = '';
    //   }
  
    //   if (!member?.philhealth) {
    //       errors.philhealth = 'PhilHealth is required';
    //       valid = false;
    //   } else {
    //       errors.philhealth = '';
    //   }
  
    //   if (!member?.philmember) {
    //       errors.philmember = 'PhilHealth member status is required';
    //       valid = false;
    //   } else {
    //       errors.philmember = '';
    //   }
  
    //   if (!member?.philDM) {
    //       errors.philDM = 'PhilHealth dependent member status is required';
    //       valid = false;
    //   } else {
    //       errors.philDM = '';
    //   }
  
    //   if (!member?.philbday) {
    //       errors.philbday = 'PhilHealth birthday is required';
    //       valid = false;
    //   } else {
    //       errors.philbday = '';
    //   }
  
  
    //     // Validate other fields similarly...
  
    //     return valid;
    // };
  
  
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
        { value: 'Daughter', name: 'Daugther' },

      ];
  

  
  let datetime = '';
    let age = '';
    let wt = '';
    let ht = '';
    let bp = '';
    let temp = '';  
    let complaints = '';
    let diagnosis = '';
    let physiciansDirections = '';


    // let updatedMember = { ...(member || {}) };
    // let changedValues: { [key: string]: any } = {}; // Object to store changed values

    let initialFormData: Member = {
    familynumberid: 0,
    userid: undefined,
    firstname: '',
    lastname: '',
    middlename: '',
    birthday: null,
    sex: '',
    contactnumber: '',
    purok: '',
    address: '',
    familyrole: '',
    fathername: '',
    mothername: '',
    philhealth: '',
    philmember: '',
    philDM: '',
    philbday: null
  };

  let formData: Member = { ...initialFormData };

    // Function to check if a field has been modified
    function hasChanged(field: keyof Member): boolean {
    return formData[field] !== initialFormData[field];
  }
    
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
              <Input id="firstname" disabled bind:value={member.firstname} placeholder="Dela Cruz" 

              />
            </ButtonGroup>
            {#if errors.firstname}
              <Helper class="mt-2" color="red">{errors.firstname}</Helper>
            {/if}
          </div>
    
          <!-- Last Name -->
          <div class="mb-1">
            <Label for="lastname" class="block mb-2">Last Name</Label>
            <ButtonGroup class="w-full">
              <Input id="lastname" disabled bind:value={member.lastname} placeholder="Juan" />
            </ButtonGroup>
            {#if errors.lastname}
              <Helper class="mt-2" color="red">{errors.lastname}</Helper>
            {/if}
          </div>
    
          <!-- Middle Name -->
          <div class="mb-1">
            <Label for="middlename" class="block mb-2">Middle Name</Label>
            <ButtonGroup class="w-full">
              <Input id="middlename" disabled bind:value={member.middlename} placeholder="Montez" />
            </ButtonGroup>
            {#if errors.middlename}
              <Helper class="mt-2" color="red">{errors.middlename}</Helper>
            {/if}
          </div>
    
          <!-- Birthday -->
          <div class="mb-1">
            <Label for="landmark" class="block mb-2">Birthday</Label>
              <!-- <Datepicker bind:value={member.birthday}/> -->
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
              <Input id="fathername" disabled bind:value={member.fathername} placeholder="Full Name" />
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
                <Input id="mothername" disabled bind:value={member.mothername} placeholder="Full Name" />
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
                <Input id="contact-number" disabled bind:value={member.contactnumber} placeholder="Enter your number" />
              </ButtonGroup>
              {#if errors.contactnumber}
                <Helper class="mt-2" color="red">{errors.contactnumber}</Helper>
              {/if}
            </div>
  
          <!--Sex-->
          <div class="mt-4 flex items-center space-x-4">
              <Label for="sex" class="block">Sex: </Label>
              <div class="flex space-x-6">
                <Radio name="Male"  disabled value="Male" bind:group={member.sex}>Male</Radio>
                <Radio name="Female" disabled value="Female" bind:group={member.sex}>Female</Radio>
              </div>
              {#if errors.sex}
                <Helper class="mt-2" color="red">{errors.sex}</Helper>
              {/if}
            </div>  
  
           <!-- Address -->
           <div class="mb-1">
              <Label for="address" class="block mb-2">Address</Label>
              <ButtonGroup class="w-full">
                  <InputAddon>
                      <MapPinAltSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </InputAddon>
                <Input id="address" disabled bind:value={member.address} placeholder="Address" />
              </ButtonGroup>
              {#if errors.address}
                <Helper class="mt-2" color="red">{errors.address}</Helper>
              {/if}
            </div>
          
          <!--Family Role-->
          <Label>
              Family Role
              <Select class="mt-2" disabled bind:value={member.familyrole}>
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
              <Select class="mt-2" disabled bind:value={member.philhealth}>
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
                <Input id="other-assistance" disabled bind:value={member.philmember} placeholder="Philhealth Member" />
                {#if errors.philmember}
                <Helper class="mt-2" color="red">{errors.philmember}</Helper>
              {/if}
              </div>
              <div class="-mt-1">
                  <Label for="philbday" class="block mb-2">Member's Birthday</Label>
                  <!-- <Datepicker bind:value={member.philbday}/> -->
                  {#if errors.philbday}
                <Helper class="mt-2" color="red">{errors.philbday}</Helper>
              {/if}
              </div>
              <div class="-mt-1">
                  <div class="mt-4 flex items-center space-x-4">
                      <Label for="philDM" class="block">Status: </Label>
                      <div class="flex space-x-6">
                        <Radio name="Member" disabled value="Member" bind:group={member.philDM}>Member</Radio>
                        <Radio name="Dependent" disabled value="Dependent" bind:group={member.philDM}>Dependent</Radio>
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
    <button 
    on:click={() => (updateModal = true)}
    class="text-white rounded-full px-6 py-3 bg-green-950">
      Update Profile &rarr;
    </button>
    <button class="text-white rounded-full px-6 py-3 bg-green-950">
      Archive Profile &rarr;
    </button>
  </div>
  
  <!--Table Here--> 
  <div class="mt-10 relative justify-center items-center z-0">
  
    <Table>
        <TableHead class="bg-amber-300">
            <TableHeadCell>Date</TableHeadCell>
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
          {#each visit as record}  
            <TableBodyRow>
                <TableBodyCell>{record.dateTime}</TableBodyCell>
                <TableBodyCell>{record.age}</TableBodyCell>
                <TableBodyCell>{record.wt}</TableBodyCell>
                <TableBodyCell>{record.ht}</TableBodyCell>
                <TableBodyCell>{record.bp}</TableBodyCell>
                <TableBodyCell>{record.temp}</TableBodyCell>
                <TableBodyCell>{record.complaints}</TableBodyCell>
                <TableBodyCell>{record.diagnosis}</TableBodyCell>
                <TableBodyCell>{record.physicianDirections}</TableBodyCell>
    
            </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
  </div>
  </div>
  </div>
  {/if}
  </main>
  
  <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Adding Visitation</h3>
        <!-- Date/Time -->

        <div class="mb-1">
          <Label for="userid" class="block mb-2">User ID</Label>
          <Input id="userid" disabled bind:value={newVisit.userid} placeholder={newVisit.userid} />
      </div>

        <div class="mb-1">
            <Label for="datetime" class="block mb-2">Date/Time</Label>
            <Input id="datetime" bind:value={newVisit.dateTime} placeholder="MM/DD/YYYY HH:MM" />
        </div>
        <!-- Age -->
        <div class="mb-1">
            <Label for="age" class="block mb-2">Age</Label>
            <Input id="age" bind:value={newVisit.age} placeholder="Enter Age" />
        </div>
        <!-- WT -->
        <div class="mb-1">
            <Label for="weight" class="block mb-2">WT</Label>
            <Input id="weight" bind:value={newVisit.wt} placeholder="Enter Weight (kg)" />
        </div>
        <!-- HT -->
        <div class="mb-1">
            <Label for="height" class="block mb-2">HT</Label>
            <Input id="height" bind:value={newVisit.ht} placeholder="Enter Height (cm)" />
        </div>
        <!-- BP -->
        <div class="mb-1">
            <Label for="bp" class="block mb-2">BP</Label>
            <Input id="bp" bind:value={newVisit.bp} placeholder="Enter Blood Pressure" />
        </div>
        <!-- Temp -->
        <div class="mb-1">
            <Label for="temp" class="block mb-2">Temp</Label>
            <Input id="temp" bind:value={newVisit.temp} placeholder="Enter Temperature (°C)" />
        </div>
        <!-- Complaints -->
        <div class="mb-1">
            <Label for="complaints" class="block mb-2">Complaints</Label>
            <Input id="complaints" bind:value={newVisit.complaints} placeholder="Enter Complaints" />
        </div>
        <!-- Diagnosis -->
        <div class="mb-1">
            <Label for="diagnosis" class="block mb-2">Diagnosis</Label>
            <Input id="diagnosis" bind:value={newVisit.diagnosis} placeholder="Enter Diagnosis" />
        </div>
        <!-- Physician's Directions -->
        <div class="mb-1">
            <Label for="physiciansDirections" class="block mb-2">Physician's Directions</Label>
            <Input id="physiciansDirections" bind:value={newVisit.physicianDirections} placeholder="Enter Directions" />
        </div>
        <!-- Buttons -->
        <div class="mt-5 flex justify-left space-x-4">
            <button type="submit" class="text-white rounded-full px-6 py-3 bg-green-950  hover:bg-green-700"
            on:click={() => (newModal = true)}
            >
                Add Visit &rarr;
            </button>
        </div>
    </form>
</Modal>


  <Modal bind:open={updateModal} size="xl" autoclose={false} class="bg-white mx-auto  left-0 right-0 top-10 p-5 rounded-lg shadow-md max-w-2xl h-100">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Updating Profile</h3>
    <div class="grid grid-cols-2 gap-6">

      {#if isLoading}
      <p>Loading member data...</p>
      {:else if member}

      <!-- First Name -->
      <div class="mb-1">
        <Label for="firstname" class="block mb-2">First Name</Label>
        <ButtonGroup class="w-full">
          <InputAddon>
            <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </InputAddon>
          <Input id="firstname" bind:value={member.firstname} placeholder="Dela Cruz" 
          class={hasChanged('firstname') ? 'bg-yellow-100' : 'bg-white'} 
          />
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
          <!-- <Datepicker bind:value={member.birthday}/> -->
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
            <Radio name="Female" value="Female" bind:group={member.sex}>Female</Radio>
          </div>
          {#if errors.sex}
            <Helper class="mt-2" color="red">{errors.sex}</Helper>
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
              <!-- <Datepicker bind:value={member.philbday}/> -->
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
{/if}
       
       

    <!--Buttons-->
    <div class="mt-4 flex justify-center space-x-4">
        <Button class="text-white rounded-full px-6 py-3 bg-green-950"
        on:click={() => updateModal = false}
        >
            Cancel &rarr;
        </Button>
        <Button on:click={() => (popupModal = true)} class="text-white rounded-full px-6 py-3 bg-green-950">
          Submit &rarr;
        </Button>
      </div>
    </div>    
    </Modal>

    <Modal bind:open={popupModal} size="xs" autoclose>
      <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
        <Button color="red" class="me-2"
        on:click={() => { 
         alert('Member updated successfully!');
         updateMember(); 
        updateModal = false; 
        window.location.reload();  // Reload the page


        }}
        >Yes, I'm sure</Button>
        <Button color="alternative"
        on:click={() => popupModal = false}
        >No, cancel</Button>
      </div>
    </Modal>

    <Modal bind:open={newModal} size="xs" autoclose>
      <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to add this record?</h3>
        <Button color="red" class="me-2"
        on:click={() => { 
         alert('Member updated successfully!');
         addVisitation(); 
        formModal = false; 
        window.location.reload();  // Reload the page

        }}
        >Yes, I'm sure</Button>
        <Button color="alternative"
        on:click={() => formModal = false}
        >No, cancel</Button>
      </div>
    </Modal>

  

 
  
  
  
  
  