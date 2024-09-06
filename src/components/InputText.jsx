
const InputText = (props) => {
    return (
      <div>
          <div className={`flex w-96 rounded ${props.bgcolor}`}>
              <input 
                  type="search" 
                  name={props.name} 
                  id={props.id}
                  placeholder={props.placeholdertext}
                  className={`w-full border-none bg-transparent px-4 py-1 ${props.textcolor} outline-none focus:outline-none`}
              />
          </div>
      </div>
    )
  }
  
  export default InputText