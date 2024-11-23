export const  load = async () => {
    const response = await fetch("https://6740cc3cd0b59228b7f162ff.mockapi.io/familynumber");
    const families = await response.json();
    console.log(families);
    
    return {   
        families
    };
}

