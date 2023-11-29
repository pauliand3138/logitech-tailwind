import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (imgURL?.bigShoe) {
            if (bigShoeImg !== imgURL?.bigShoe) {
                changeBigShoeImage(imgURL?.bigShoe);
            }
        } else {
            if (bigShoeImg !== imgURL) {
                changeBigShoeImage(imgURL);
            }
        }
    };

    return (
        <div
            className={`border-2 rounded-xl  ${
                bigShoeImg === imgURL?.bigShoe
                    ? "border-dark-blue"
                    : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div
                className={`flex justify-center items-center bg-card bg-center bg-cover ${
                    imgURL.bigShoe ? "sm:w-40 sm:h-40" : "sm:w-20 sm:h-20"
                } rounded-xl m-0.5 max-sm:p-4`}
            >
                <img
                    src={imgURL?.thumbnail ? imgURL?.thumbnail : imgURL}
                    alt="shoe collection"
                    width={227}
                    height={170}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
