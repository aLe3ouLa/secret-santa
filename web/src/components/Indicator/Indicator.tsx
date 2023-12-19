import Icon from '../Icon/Icon'

type IndicatorProps = {
  status: 'success' | 'warning' | 'error'
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <div className="h-8 w-8 absolute -bottom-2 -right-2 rounded-full border-4 border-white ">
      {status === 'success' && (
        <span className="center rounded-full bg-spanishGreen">
          <Icon id="check" size={24} />
        </span>
      )}
      {status === 'warning' && (
        <span className="center h-full w-full block rounded-full " />
      )}
      {status === 'error' && (
        <span className="center h-full w-full block rounded-full " />
      )}
    </div>
  )
}

export default Indicator
