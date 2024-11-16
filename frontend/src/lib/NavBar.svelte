<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  </script>
  
  <Navbar style="background-color: #0F2A1D" class="p-2 z[20]">
    <NavBrand href="/">
      <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center whitespace-nowrap text-xl font-semibold text-white">Flowbite</span>
    </NavBrand>
    <div class="flex md:order-2 text-white">
        <Button size="sm" class="bg-white text-green-950 hover:text-green-700">Get started</Button>
                <NavHamburger class="text-white " />
      </div>
    <NavUl class="order-1 text-white">
      <NavLi class="text-white hover:text-green-700" href="/">Home</NavLi>
      <NavLi class="text-white hover:text-green-700" href="/about">About</NavLi>
      <NavLi class="text-white hover:text-green-700" href="/docs/components/navbar">Navbar</NavLi>
      <NavLi class="text-white hover:text-green-700" href="/pricing">Pricing</NavLi>
      <NavLi class="text-white hover:text-green-700" href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>