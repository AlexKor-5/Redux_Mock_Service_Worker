import React, { useEffect } from 'react'

export const DataGetting = () => {
    useEffect(() => {
        fetch('/todos')
            .then(response => response.json())
            .then(data => console.log(data))
    })

    return <>Data</>
}
