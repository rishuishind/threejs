import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from 'react-color/lib/helpers/color';

const CustomButton = (props) => {

  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      console.log(snap.color);
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }
  }
  return (
    <button
      onClick={props.handleClick}
      className={`px-2 py-1.5 h-fit rounded-md ${props.customStyles}`}
      style={generateStyle(props.type)}
    >
      {props.title}
    </button>
  )
}

export default CustomButton