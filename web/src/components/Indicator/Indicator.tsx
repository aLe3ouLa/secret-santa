import Icon from '../Icon/Icon'

type IndicatorProps = {
  status: 'success' | 'warning' | 'error'
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <div>
      {status === 'success' && (
        <span className="indicator h-6 w-6 border-white bg-spanishGreen text-white">
          <Icon id="check" size={16} />
        </span>
      )}
      {status === 'warning' && (
        <span className="indicator h-6 w-6 border-white bg-supernova text-white">
          <Icon id="question" size={16} />
        </span>
      )}
      {status === 'error' && (
        <span className="indicator h-6 w-6 border-white bg-orangeRed text-white">
          <Icon id="minus" size={16} />
        </span>
      )}
    </div>
  )
}

export default Indicator
