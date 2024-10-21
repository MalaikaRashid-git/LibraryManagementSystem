/* eslint-disable react/prop-types */

import { AiOutlineArrowRight } from 'react-icons/ai';
const Button = ({label , onClick , isArrow = false}) => (
    <button
    className="bg-purple-800 hover:bg-purple-700 text-white rounded-full px-6 py-2 hover:shadow-lg transition duration-200"
    type='button'
    onClick={onClick}
  >
    {label} {isArrow && <AiOutlineArrowRight className="ml-2" />}
  </button>
)

export default Button