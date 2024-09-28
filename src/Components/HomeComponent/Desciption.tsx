import * as React from 'react';
import '../../assets/DescriptionComp.css';

const Description: React.FunctionComponent = () => {
    return (
        <>
            <section className="section-custom p-0 shadow-0">
                <div className="container-custom p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800 shadow-none">
                    <div className="">
                        <div className="">
                            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0 ">
                                <h2 className="heading-custom mb-2 text-3xl font-bold font-heading dark:text-white text-center">
                                    About Us
                                </h2>
                                <p className="paragraph-custom mb-8 leading-loose text-gray-500 dark:text-gray-300 text-center mb-0">
                                    Since 2021, Anviee Healthcare has been at the forefront of healthcare innovation. We provide top-notch podiatry care, medical device distribution, and digital solutions including marketing, web development, and software services.
                                </p>
                                {/* <div className="w-full md:w-1/3">
                                    <button type="button" className="button-custom w-full text-center text-base font-semibold shadow-md rounded-lg">
                                        See more
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className="aboutUs-Section">
                            <ul className="space-y-12 d-flex align-items-center">
                                <li className="list-item-custom m-0">
                                    <div className="px-4">
                                        <span className="icon-circle flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold rounded-full">
                                            1
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="list-item-heading my-4 text-xl font-semibold dark:text-white">
                                            Expertise Across Multiple Domains
                                        </h3>
                                        <p className="list-item-paragraph leading-loose text-gray-500 dark:text-gray-300">
                                            From healthcare to digital marketing, we bring a diverse range of expertise to meet the unique needs of our clients.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-item-custom m-0">
                                    <div className="px-4">
                                        <span className="icon-circle flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold rounded-full">
                                            2
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="list-item-heading my-4 text-xl font-semibold dark:text-white">
                                            Customer-Centric Approach
                                        </h3>
                                        <p className="list-item-paragraph leading-loose text-gray-500 dark:text-gray-300">
                                            We prioritize our clients’ needs, ensuring customized and effective solutions for every challenge.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-item-custom m-0">
                                    <div className="px-4">
                                        <span className="icon-circle flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold rounded-full">
                                            3
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="list-item-heading my-4 text-xl font-semibold dark:text-white">
                                            Innovation and Quality
                                        </h3>
                                        <p className="list-item-paragraph leading-loose text-gray-500 dark:text-gray-300">
                                            Our commitment to innovation drives us to continually provide high-quality products and services that enhance patient care and business growth.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Description;


