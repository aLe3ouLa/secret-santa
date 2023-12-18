type IndicatorProps = {
  status: 'success' | 'warning' | 'error'
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full border-4 border-white ">
      <span className="block h-full w-full rounded-full bg-green-500 " />
    </div>
  )
}

export default Indicator
