import { useState, useEffect } from 'react'

const TestPrivateEndpoint = () => {

    const [message, setMessage] = useState('')

    useEffect(() => {
        const loadMessage = async () => {
            const req = await fetch('http://localhost:8000/api/get_data_from_github', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('dev-profile-id-token')}`,
                    'access-token': `${localStorage.getItem('dev-profile-access-token')}`,
                }
            })

            const message = await req.text()
            setMessage(message)
            console.log(message)
        }

        loadMessage()
    }, [])

    return (
        <div>
            Message: {message}
        </div>
    )
}

export default TestPrivateEndpoint
