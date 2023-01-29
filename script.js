/* CONSUMINDO API
PASSO 1 - FETCH
*/
function fetchApiData () {
    fetch('https://www.boredapi.com/api/activity?participants=1')
     .then((response) => response.json())
     .then((data) => {
        const activityName = data.activity
        const type  = data.type
        const participants  = data.participants
        const price  = data.price
        document.getElementById('mostrar') ;
    mostrar.innerHTML= `${activityName}, it costs ${price}, her type is
${type}, can involve ${participants} participant(s)`
       
    
    
    })


}

