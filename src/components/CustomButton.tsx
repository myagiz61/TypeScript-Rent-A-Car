import { IButtonProp } from '../types';

const CustomButton = ({
  title,
  designs,
  handleClick,
  disabled,
  btnType,
  rIcon,
}: IButtonProp) => {
  return (
    <button
      disabled={disabled}
      type={btnType || 'button'} // gönderildiyse btn type gönderilmediyse button olarak atadık
      className={`custom-btn ${designs}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {/* gönderilen sağ ikon varsa ekrana bas */}
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
