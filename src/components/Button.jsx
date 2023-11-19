import React from "react";

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:scale-105 transition-transform
        ${
            backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor} `
                : "bg-logitech-blue  text-white border-logitech-blue"
        } ${fullWidth && "w-full"}
         `}
        >
            {label}{" "}
            {iconURL && (
                <img
                    src={iconURL}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
