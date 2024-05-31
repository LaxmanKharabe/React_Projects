console.log('Script without defer is running');
const start = Date.now();
console.log(start);
while (Date.now() - start < 3000) {
    // Busy-wait for 3 seconds
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'lightblue';
});
console.log('Script without defer has finished');