import { useEffect, useState } from "react"
import { IMG_MEMES_PASSWORD, IMG_MEMES_USERNAME, JOKES_HEADERS, URL_JOKES, URL_MEMES } from "./config"

function App() {
  const [punchline, setPunchline] = useState('')
  const [setup, setSetup] = useState('')
  const [image, setImage] = useState('')

  const retrieveJoke = async () => {
    const result = await fetch(URL_JOKES + '/random/joke', {
      method: 'GET',
      headers: JOKES_HEADERS
    })

    const data = await result.json()

    if (data.message) {
      setPunchline(data.message)
    } else {
      const {punchline, setup} = data.body[0]
  
      setPunchline(punchline)
      setSetup(setup)
    }

  }

  const retrieveMeme = async () => {
    if (!punchline) return;

    const params = new URLSearchParams({
      template_id: '112126428',
      username: IMG_MEMES_USERNAME,
      password: IMG_MEMES_PASSWORD,
      text0: punchline,
      text1: setup ?? 'NO TEXT',
    }).toString()
    
    const result = await fetch(URL_MEMES + '/caption_image?' + params, {
      method: 'POST'
    })

    const data = await result.json()
    setImage(data.data.url)

    console.log(data)
  }

  useEffect(() => {retrieveJoke()}, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {retrieveMeme()}, [punchline])

  return (
    <>
      <header>
        <button onClick={() => {retrieveJoke()}}>Regenerate joke</button>
      </header>
      <section>
        <h2>{punchline}</h2>
        <p>{setup}</p>
        {image && <figure>
          <img src={image} />
        </figure>}
      </section>
    </>
  )
}

export default App
