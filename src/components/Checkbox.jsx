import { FaCheck } from "react-icons/fa";

const Checkbox = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <label htmlFor="check-box-1" className="cursor-pointer relative">
            <input 
                type="checkbox" 
                id="check-box-1" 
                className="appearance-none h-32 w-32 border-2 rounded-3xl border-plastic-pink "
            />
            <FaCheck 
                className="text-8xl h-32 w-32 text-plastic-pink absolute left-2 top-0 text-opacity-0 check-1 transition "
            />
        </label>
    </div>
  )
}

export default Checkbox