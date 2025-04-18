document.getElementById('children').addEventListener('change', function() {
    const childrenCountDiv = document.getElementById('cantchilds');
    if (this.value === 'yes') {
        childrenCountDiv.classList.remove('hidden');
    } else {
        childrenCountDiv.classList.add('hidden');
    }
});