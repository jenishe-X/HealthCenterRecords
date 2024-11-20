<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  </script>
  
  <Navbar style="background-color: #0F2A1D" class="p-2 z[20]">
    <NavBrand href="/">
      <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center whitespace-nowrap text-xl font-semibold text-white">Health Center Monitoring System</span>
    </NavBrand>
    <div class="flex md:order-2 text-white">
        <Button size="sm" class="bg-white text-green-950 hover:text-green-700" href="/">Logout</Button>
      </div>
    <NavUl class="order-1 text-white">
      <NavLi class="text-white hover:text-amber-300" href="/PersonnelDashboard">Dashboard</NavLi>
      <NavLi class="text-white hover:text-amber-300" href="/Purok">Purok</NavLi>
      <NavLi class="text-white hover:text-amber-300" href="https://www.facebook.com/barangayStaaritaGapo">About</NavLi>
      
    </NavUl>
  </Navbar>