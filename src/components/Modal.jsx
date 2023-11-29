import React from "react";
import ShoeCard from "./ShoeCard";
import { useState } from "react";

const Modal = ({ setShowModal, name, image, price, detail, otherImg }) => {
    const [bigShoeImg, setBigShoeImg] = useState(otherImg[0]);

    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-overlay"
            onClick={() => setShowModal(false)}
        >
            <div
                className="relative w-auto my-6 mx-auto max-lg:m-4 max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl max-lg:text-[16px] font-semibold font-palanquin">
                            {name + " - "}
                            <span className="font-montserrat">{price}</span>
                        </h3>
                        <span
                            className="ml-auto text-black font-bolds text-3xl max-lg:text-[16px] cursor-pointer hover:scale-110 transition-transform"
                            onClick={() => setShowModal(false)}
                        >
                            x
                        </span>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <div className="flex flex-row max-lg:flex-col max-lg:gap-0 justify-center gap-[7rem]">
                            <div className="flex flex-row gap-1 max-lg:bg-logitech-blue lg:bg-hero bg-cover bg-center rounded-lg items-center lg:min-w-[250px]">
                                <img
                                    src={bigShoeImg}
                                    className="max-lg:mx-auto max-lg:w-[200px] w-[580px] h-[200px]"
                                />
                                <div className="flex flex-col justify-between">
                                    {otherImg.map((img) => (
                                        <ShoeCard
                                            imgURL={img}
                                            changeBigShoeImage={(img) => {
                                                setBigShoeImg(img);
                                            }}
                                            bigShoeImg={bigShoeImg}
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className="my-4 text-blueGray-500 text-lg max-lg:text-sm leading-relaxed info-text">
                                {detail}
                            </p>
                        </div>
                    </div>
                    {/*footer*/}
                </div>
            </div>
        </div>
    );
};

export default Modal;
