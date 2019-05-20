const { fetch, alert } = window

document.querySelector('#submitBurger').addEventListener('click', event => {
    event.preventDefault()
    // console.log(event.target.id)
    // const addBurger = _ => {
        fetch('/burgers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                burger_name: document.querySelector('#addBurger').value,
                devoured: false
            })
        })
            .then(_ => {
                location.reload()
            })
            .catch(e => console.error(e))
    // }

})


document.querySelector('#devourBurger').addEventListener('click', event => {
    // event.preventDefault()
    console.log(event.target)
    // const addBurger = _ => {
        // fetch('/burgers', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         burger_name: document.querySelector('#addBurger').value,
        //         devoured: true
        //     })
        // })
        //     .then(_ => {
        //         location.reload()
        //     })
        //     .catch(e => console.error(e))
    // }

})