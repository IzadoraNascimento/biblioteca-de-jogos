import PropTypes from "prop-types"

TextInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func
}

export default function TextInput({value, setValue}){
  return(
    <>
      <label htmlFor="title">Titulo:</label>
      <input 
        type="text" 
        name="title" 
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  )
}