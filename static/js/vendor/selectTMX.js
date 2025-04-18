document.getElementById('service').addEventListener('change', function() {
    const MensajeriaDiv = document.getElementById('Mensajeria');
    const ChildsDiv = document.getElementById('childs');
    const TaxiDiv = document.getElementById('Taxi');
    const ExcursionDiv = document.getElementById('Excursion');
    if (this.value === 'Mensajeria') {
        MensajeriaDivDiv.classList.remove('hidden');
        ChildsDiv.classList.add('hidden');
    } else 
    if (this.value === 'Taxi') {{
        TaxiDiv.classList.remove('hidden');
    }
    else {
        ExcursionDiv.classList.remove('hidden');
    }
});