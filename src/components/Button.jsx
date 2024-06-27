const Button = ({ label, backgroundColor, borderColor, textColor, iconURL, fullWidth }) => {
  return (
    <button className={`flex justify-centerr items-center
       gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
       ${backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}` :

        "bg-coral-red text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'} `}>
        {label}
        {iconURL &&<img src={iconURL} alt="Arrow right icon" className="ml-2 w-5 h-5" />}
      </button>
  )
}

export default Button
