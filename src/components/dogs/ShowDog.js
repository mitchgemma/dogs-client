import React, { useState, useEffect } from 'react'
import { getOneDog } from '../../api/dogs'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'

const ShowDog = (props) => {
  const [dog, setDog] = useState(null)
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  console.log('id in showDog', id)

  useEffect(() => {
    getOneDog(id)
      .then((res) => setDog(res.data.dog))
      .catch(console.error)
  })

  console.log('the dog', dog)

  return (
    <>
      <h1>{dog}</h1>
      {/* <Container className="fluid">
        <Card>
          <Card.Header>{dog.name}</Card.Header>
          <Card.Body>
            <Card.Text>
              <small>Age: {dog.age}</small>
              <br />
              <small>Breed: {dog.breed}</small>
              <br />
              <small>Friendly: {dog.friendly ? 'yes' : 'no'}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container> */}
    </>
  )
}

export default ShowDog
