import './styles/ChangeClimeBtn.css'

const ChangeClimeBtn = ({ handleChangeTemp }) => {
  return (
    <div className="temp_btn">
      <button onClick={handleChangeTemp}> Change °F/°C</button>
    </div>
  )
}

export default ChangeClimeBtn
