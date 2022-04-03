import React, { useState, useEffect } from 'react'
import { getAllDogs } from '../../api/dogs'
import { Link } from 'react-router-dom'

const IndexDogs = (props) => {
  const [dogs, setDogs] = useState(null)

  useEffect(() => {
    getAllDogs()
      .then((res) => {
        setDogs(res.data.dogs)
      })
      .catch(console.error)
  }, [])

  if (!dogs) {
    return <p>loading...</p>
  } else if (dogs.length === 0) {
    return <p>no dogs yet, go add some</p>
  }

  let dogsJsx

  if (dogs.length > 0) {
    dogsJsx = dogs.map((dog) => (
      <li key={dog._id}>
        <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
      </li>
    ))
  }

  return (
    <>
      <h1>The Woofs</h1>
      <ul>{dogsJsx}</ul>
    </>
  )
}

export default IndexDogs
