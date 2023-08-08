import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({addGame}) {

  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
  }

  return(
    <form onSubmit={handleSubmit}>
      // componente Pai controlando o componente Filho (componente controlado)
      <TextInput value={title} setValue={setTitle} />
      <div>
        <label htmlFor="cover">Capa:</label>
        <input 
          type="text" 
          name="cover" 
          id="cover"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  )
}