<script lang="ts">
let rightPanelActive = false;

const handleSignUp = () => {
  rightPanelActive = true;
};

const handleSignIn = () => {
  rightPanelActive = false;
};
</script>

<style>
:root {
    /*Customize colors*/
    --overlay-color: #597445;
    --overlay-gradiant1: #1A4D2E;
    --overlay-gradiant2: #1A4D2E;
}


* {
    box-sizing: border-box;
}

.cover {
    background-color: #f6f5f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 10px 0 50px;
}

h1 {
    font-weight: bold;
    font-size: x-large;
    margin: 0;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: medium;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 20px ;
}

.container {
    background: white;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.form-container form {
    background: white;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}




.form-container input {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container input:focus {
    outline: none;
}

button {
    background-color: black;
    color: white;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 5px;
    cursor: pointer;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background: transparent;
    border-color: white;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 50;
}

.overlay {
    background: var(--overlay-color);
    background: linear-gradient(to right, var(--overlay-gradiant1), var(--overlay-gradiant2)) no-repeat 0 0 / cover;
    color: white;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.overlay-left {
    transform: translateX(-20%);
}


/* Animation */

/* Move the signin to the right */
.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

/*Move overlay to the left*/
.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

/* Bring sign up over sign in*/
.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

/* Move overlay back to the right*/

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}
</style>

<main>
    <div class="cover">
    <div class="container {rightPanelActive ? 'right-panel-active' : ''}">
        <!-- Sign Up Form -->
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>
    
        <!-- Sign In Form -->
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <span>Ready to sign in as the Barangay Personnel?</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/">Forgot your password?</a>
            <button type="button">Login</button>
          </form>
        </div>
    
        <!-- Overlay -->
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
                <img src="assets/logo.png" alt="logo" style="width: 200px; height: auto;">
              <h1>Hello friend!</h1>
              <p>Login to your account</p>
              <button class="ghost" on:click={handleSignIn}>Login</button>
            </div>
            <div class="overlay-panel overlay-right">
                <img src="assets/logo.png" alt="logo" style="width: 200px; height: auto;">
              <h1>Admin</h1>
              <p>Ready to sign in as the admin?</p>
              <button class="ghost" on:click={handleSignUp}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>