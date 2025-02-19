function Recursion(params) {
    if (params === 0) {
        console.log("Recursion");
        return;
    }
    console.log(params, "Recursion");
    Recursion(params - 1);
}
Recursion(5);

export default Recursion;
