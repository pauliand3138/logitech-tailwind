import React from "react";

const Modal = ({ setShowModal, name, image, price, detail }) => {
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
                        <div className="flex flex-row max-lg:flex-col max-lg:gap-0 justify-center space-between gap-16">
                            <img src={image} width={200} className="mx-auto" />
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
