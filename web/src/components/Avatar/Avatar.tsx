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
          className="avatar border-white object-cover"
          src={avatar}
          alt={alt}
        />
      )}

      {letter && !avatar && (
        <span className="center avatar border-white bg-spanishGreen">
          <p className="text-2xl font-bold uppercase text-white">{letter}</p>
        </span>
      )}

      {icon && !letter && !avatar && (
        <span className="center avatar border-vistaBlue bg-spanishGreen text-white">
          <Icon id={icon} size={32} />
        </span>
      )}

      {isSantaHatShowing && (
        <img
          src="/images/santa-hat.png"
          alt="Santa Hat"
          className="absolute -right-[15px] -top-[18px]"
        />
      )}

      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  )
}

export default Avatar
