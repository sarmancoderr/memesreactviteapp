import { useEffect, useState } from "react"
import { JOKES_HEADERS, URL_JOKES } from "./config"

function App() {
  const [punchline, setPunchline] = useState('')
  const [setup, setSetup] = useState('')

  const retrieveJoke = async () => {
    const result = await fetch(URL_JOKES + '/random/joke', {
      method: 'GET',
      headers: JOKES_HEADERS
    })

    const data = await result.json()

    const {punchline, setup} = data.body[0]

    setPunchline(punchline)
    setSetup(setup)
  }

  useEffect(() => {retrieveJoke()}, [])

  return (
    <>
      <header>
        <button onClick={() => {retrieveJoke()}}>Regenerate joke</button>
      </header>
      <section>
        <h2>{punchline}</h2>
        <p>{setup}</p>
      </section>
    </>
  )
}

export default App
