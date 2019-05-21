const { fetch, alert } = window


const addBurger = _ => {
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
}

const devourABurger = _ => {
    fetch(`/burgers/${event.target.dataset.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            devoured: true
        })
    })
        .then(_ => {
            location.reload()
        })
        .catch(e => console.error(e))
}

const removeBurger = _ => {
    fetch(`/burgers/admin/${event.target.dataset.id}`, { method: 'DELETE' })
        .then(_ => {
            location.reload()
        })
        .catch(e => console.error(e))
}

document.addEventListener('click', event => {
    event.preventDefault()
    // console.log(event.target)
    // console.log(event.target.dataset.id)
    switch (event.target.id) {
        case 'submitBurger':
            addBurger()
            break;

        case 'devourBurger':
            devourABurger()
            break;

        case 'removeBurger':
            removeBurger()
            break;

        default:
            break;
    }

})