import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

type AvatarProps = {
  avatar?: string
  alt?: string
  letter?: string
  icon?: string
  isSantaHatShowing?: boolean
  indicator?: 'success' | 'warning' | 'error' | null
}

const Avatar = ({
  avatar,
  alt,
  letter,
  icon,
  isSantaHatShowing,
  indicator,
}: AvatarProps) => {
  return (
    <div className="relative inline-block">
      {avatar && (
        <img
          className="h-18 w-18 border-avatar rounded-full border-white bg-center"
          src={avatar}
          alt={alt}
        />
      )}
      {letter && !avatar && (
        <p className="center h-18 w-18 border-avatar rounded-full border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter}
        </p>
      )}
      {icon && !letter && !avatar && <Icon id={icon} size={32} />}
      {isSantaHatShowing && (
        <img
          src="/images/santa-hat.png"
          alt="Santa Hat"
          className="absolute -right-[15px] -top-[19px]"
        />
      )}
      {indicator && <Indicator status={indicator} />}
    </div>
  )
}

export default Avatar
