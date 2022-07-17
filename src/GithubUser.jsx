import React from 'react'

const GithubUser = ({ login, avatar }) => {
    return (
        <>
            <h1>{login}</h1>
            <img src={avatar} alt="" height={150} alt="name" />
        </>
    )
}

export default GithubUser