

const Button = (props) => {
    return (
            <button 
                className="cursor-pointer bg-gradient-to-r from-blue-300 to-sky-500 w-44 h-12 rounded-lg drop-shadow-md hover:drop-shadow-xl text-white text-sm"
                    onClick={props.onButtonClick}
            >
                {props.name}
            </button>
    )
}

export default Button