export const sendApi = (data,method,url) => {
    let motherOption = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: method
    }

    motherOption = data ? {...motherOption, body:JSON.stringify(data)} : motherOption

    return fetch(`http://localhost:3001/${ url }`,motherOption
    )
    .then(res => res.json())
}
