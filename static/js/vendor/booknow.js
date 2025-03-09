function GetParamsURL() {
    const queryString = windows.location.search;
    const URLParams = new URLSearchParams(queryString);
    return URLParams;
}

const params = GetParamsURL();
const selectId = params.get('select');
const value = params.get('valor');


if (selectId & value) {
    const elementList = document.getElementById(selectId);
    
    if(elementList) {
        elementList.value = value;
        console.log(`Valor "${value}" seleccionado!`);
    } else {
        console.error ('No se encontraron los parametros');
    }
} else {
    console.error("Faltan parametros");
}

