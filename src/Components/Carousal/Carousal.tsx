import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/AnvieeImg1.jpg';
import img2 from '../../assets/AnvieeImg2.jpeg';
import img3 from '../../assets/AnvieeImg3.jpg';
import img4 from '../../assets/AnvieeImg4.jpg';

interface ICarousalProps {

}

const CarousalHomePage: React.FunctionComponent<ICarousalProps> = () => {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='landingPage-Carousel'>
            <Carousel activeIndex={index} interval={2000} onSelect={handleSelect} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Podiatry Healthcare Services</h5>
                        <p>Under the Anviee Healthcare brand, we specialize in podiatry, offering expert care and customized diabetic and orthopedic footwear tailored to your unique needs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Medical Device Distribution</h5>
                        <p>Providing top-quality medical devices for diverse healthcare needs, ensuring reliable and cutting-edge solutions for superior patient care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Medical Device Distribution</h5>
                        <p>Providing top-quality medical devices for diverse healthcare needs, ensuring reliable and cutting-edge solutions for superior patient care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h5>Our Reach and Impact</h5>
                        <p>Since our inception, we have partnered with over 500 clients, delivering exceptional digital marketing, healthcare solutions, and sales services with a commitment to excellence, innovation, and reliability.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarousalHomePage;