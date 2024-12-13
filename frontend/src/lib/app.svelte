<script>
    import { Router, Route } from 'svelte-routing';
    import Familymember from './familymember.svelte';
    import Memberprofile from './memberprofile.svelte';
  
    // Define routes
    const routes = [
      { path: '/FamilyMember/:userid', component: Familymember }, // Dynamic route
    ];
  </script>
  
  <Router>
    {#each routes as { path, component }}
      <Route path={path} component={component} />
    {/each}
  </Router>
  