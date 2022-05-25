export const getPost = async () => {
    const res = await fetch('https://dummyapi.io/data/v1/post', {
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
        },
    })
    const posts = await res.json()
    return posts
}

export const getTag = () => {
    fetch(`https://dummyapi.io/data/v1/tag`, {
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

export const getComments = async (id = '60d21b7967d0d8992e610d1b') => {
    const res = await fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
        },
    })
    const comments = await res.json()
    return comments
}


export const getUsers = () => {
    fetch(`https://dummyapi.io/data/v1/user`, {
        // app-id: 0JyYiOQXQQr5H9OEn21312
        headers: {
            'Content-Type': 'application/json',
            'app-id': '628d5656a0e449fa16216ca8'
        },
    })
        .then(res => res.json())
        .then(res => console.log(res))
}
