const local = document.querySelector("#local");

//ultima parte a ser feita//
function showData(result) {
    for (const campo in result)
    if(document.querySelector("#"+campo)){
        document.querySelector("#"+campo).value = result[campo]
    }

    
}



local.addEventListener("blur", () => {
    let busque = local.value
    console.log(local.value)

    const options = {
        method: 'GET',
        mode: 'cors',
        cache:'default'

    }


    fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=9422a6fb3b834dc7bfe9d7847e347b58&location=${busque}`, options)
    .then(response => {response.json()
        .then(data => showData(data))
    })
    
    
    .catch( e => console.log('Deu erro:' +e, message))
    

})


