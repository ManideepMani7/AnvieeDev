import * as React from 'react';
import '../../assets/MasterPage.css'
import womenFootware from '../../assets/CategoryImgs/womensFootware.avif';
import menFootware from '../../assets/CategoryImgs/MenFootware.avif';
import customfootwear from '../../assets/CategoryImgs/custom_footwear.webp';
import orthoticsoriginal from '../../assets/CategoryImgs/orthotics_original.avif';


interface ICategoryCardsProps {

}
const CategoryCards: React.FunctionComponent<ICategoryCardsProps> = () => {
    return (
        <>
        <div className='bg-primary-section shopping-section'>
        <h2 className="heading-custom mb-4 text-3xl font-bold font-heading dark:text-white text-center">Shop Now</h2>
            <div className='d-flex justify-content-center'>
                <div className="card-container me-4">
                    <img
                        src={menFootware}
                        alt="Laptop"
                        className="card-image"
                    />
                    <button
                        type="button"
                        className="card-button"
                    >
                        Men's Footwear
                    </button>
                </div>
                <div className="card-container me-4">
                    <img
                        src={womenFootware}
                        alt="Laptop"
                        className="card-image"
                    />
                    <button
                        type="button"
                        className="card-button"
                    >
                        Womens's Footwear
                    </button>
                </div>
                <div className="card-container me-4">
                    <img
                        src={orthoticsoriginal}
                        alt="Laptop"
                        className="card-image"
                    />
                    <button
                        type="button"
                        className="card-button"
                    >
                        Foot Orthotics
                    </button>
                </div>
                <div className="card-container">
                    <img
                        src={customfootwear}
                        alt="Laptop"
                        className="card-image"
                    />
                    <button
                        type="button"
                        className="card-button"
                    >
                        Custom Footwear
                    </button>
                </div>
            </div>
            </div>

        </>
    )
}
export default CategoryCards;