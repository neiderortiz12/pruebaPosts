export const getPost = async() => {
    const res = await fetch('https://dummyapi.io/data/v1/post',{
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const posts = await res.json()
    return posts
    // .then(res => return res.json())
    // .then(res => {console.log(res); return res})
}

export const getTag = () => {
    fetch(`https://dummyapi.io/data/v1/tag`,{
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

export const getComments = (id = '60d21b7967d0d8992e610d1b') => {
    fetch(`https://dummyapi.io/data/v1/post/${id}/comment`,{
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(res => res.json())
    .then(res => console.log(res))
}


export const getUsers = () => {
    fetch(`https://dummyapi.io/data/v1/user`,{
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(res => res.json())
    .then(res => console.log(res))
}
