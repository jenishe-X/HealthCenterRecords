export const  load = async () => {
    const response = await fetch("http://localhost:4000/families");
    const families = await response.json();
    return {
        families
    };
}