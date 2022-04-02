import IndexDogs from './dogs/IndexDogs'

const Home = (props) => {
  // const { msgAlert, user } = props
  console.log('props in home', props)
  const { user } = props

  return (
    <>
      <h2>Welcome to dogs app!</h2>
      <IndexDogs user={user} />
    </>
  )
}

export default Home
