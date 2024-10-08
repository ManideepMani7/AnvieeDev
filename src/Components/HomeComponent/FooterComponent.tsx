import * as React from 'react';
import '../../assets/Footer.css';
import logo from '../../assets/AnvieeLogo.png'

const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className="Project-fotter-section">
                <div className="d-flex">
                    <div className="footer-section">
                        
                        <div className="logo-container ms-0 mb-3">
                                <img src={logo} alt="Logo" className="logo" />
                            </div>
                        <p className="footer-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy</p>

                        <p className="footer-description"><span className="fw-bold">Phone :</span> 1234567890</p>
                        <p className="footer-description"><span className="fw-bold">Email :</span> example@gmail.com</p>

                    </div>
                    <div className="footer-section">
                        <h6 className="footer-header Rubik2M">Internal Links</h6>
                        <ul>
                            <li>Company</li>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Shipping & Return Policy</li>
                            <li>Cancellation and Refund Policy</li>
                            <li>Cancellation and Refund Policy</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h6 className="footer-header Rubik2M">Our Services</h6>
                        <ul>

                            <li>Company</li>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Shipping & Return Policy</li>
                            <li>Cancellation and Refund Policy</li>
                            <li>Cancellation and Refund Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="footer-header Rubik2M">Our Services</h6>
                        <p className="fotter-subText">Find & Follow us on our Social Mediums and Share</p>
                        <div className="d-flex">
                            <a className="social-media-icons ms-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.049C16 3.603 12.419 0 8 0C3.581 0 0 3.603 0 8.049C0 12.067 2.925 15.396 6.75 16V10.376H4.719V8.048H6.749V6.275C6.749 4.258 7.944 3.143 9.772 3.143C10.646 3.143 11.562 3.301 11.562 3.301V5.281H10.553C9.559 5.281 9.25 5.902 9.25 6.539V8.049H11.469L11.114 10.375H9.25V16C13.075 15.396 16 12.067 16 8.049Z" fill="white" />
                            </svg>
                            </a>
                            <a className="social-media-icons">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.23 1.49207C10.39 1.45507 10.134 1.44607 8 1.44607C5.856 1.44607 5.61 1.45607 4.762 1.50107C3.986 1.52807 3.567 1.66507 3.275 1.77407C2.93009 1.90028 2.61828 2.10302 2.363 2.36707C2.09594 2.62554 1.89022 2.9406 1.761 3.28907C1.651 3.57107 1.523 3.99107 1.487 4.77507C1.441 5.61507 1.441 5.87007 1.441 8.00507C1.441 10.1391 1.451 10.3951 1.487 11.2341C1.491 11.7441 1.584 12.2501 1.761 12.7291C1.906 13.0941 2.08 13.3681 2.363 13.6421C2.645 13.9241 2.901 14.0981 3.283 14.2441C3.757 14.4201 4.257 14.5121 4.762 14.5171C5.61 14.5631 5.865 14.5631 8 14.5631C10.134 14.5631 10.39 14.5531 11.23 14.5171C12.014 14.4811 12.433 14.3531 12.716 14.2441C13.09 14.0981 13.364 13.9151 13.637 13.6421C13.92 13.3591 14.084 13.0941 14.239 12.7201C14.416 12.2441 14.509 11.7411 14.513 11.2341C14.55 10.3941 14.559 10.1391 14.559 8.00407C14.559 5.87007 14.549 5.61407 14.504 4.77507C14.477 3.99107 14.34 3.57107 14.23 3.28007C14.1039 2.9348 13.9012 2.62264 13.637 2.36707C13.3767 2.10321 13.063 1.89797 12.717 1.76507C12.433 1.65507 12.015 1.52807 11.23 1.49207ZM4.697 0.0500688C5.554 0.0140688 5.828 0.00506899 7.999 0.00506899C9.099 -0.00893101 10.201 0.00606883 11.301 0.0500688C11.965 0.0640688 12.622 0.190069 13.244 0.424069C13.776 0.626429 14.2583 0.940877 14.658 1.34607C15.068 1.74307 15.386 2.22607 15.588 2.76007C15.818 3.38207 15.942 4.03907 15.953 4.70207C16 5.56007 16 5.82407 16 8.00507C16 10.1751 15.99 10.4491 15.954 11.2971C15.918 12.1551 15.781 12.7391 15.58 13.2401C15.38 13.7701 15.106 14.2161 14.66 14.6631C14.2614 15.0702 13.7784 15.3849 13.245 15.5851C12.735 15.7761 12.15 15.9221 11.302 15.9591C10.445 15.9951 10.18 16.0041 8 16.0041C5.829 16.0041 5.555 15.9951 4.698 15.9491C3.849 15.9221 3.266 15.7851 2.755 15.5851C2.22551 15.3778 1.74423 15.064 1.341 14.6631C0.935632 14.2584 0.618917 13.7738 0.411 13.2401C0.228 12.7301 0.082 12.1551 0.046 11.2971C0.009 10.4501 0 10.1671 0 8.00407C0 5.84307 6.70552e-08 5.56907 0.0550001 4.70207C0.0820001 3.85407 0.219 3.27007 0.42 2.76007C0.633486 2.23427 0.945788 1.75428 1.34 1.34607C1.74328 0.942782 2.22483 0.626289 2.755 0.416069C3.265 0.233069 3.848 0.0860688 4.697 0.0500688ZM5.124 4.85607C5.50364 4.46804 5.95646 4.15917 6.45627 3.94732C6.95608 3.73548 7.49295 3.62488 8.03579 3.62191C8.57863 3.61894 9.11667 3.72367 9.61877 3.93004C10.1209 4.13641 10.577 4.44032 10.9609 4.82417C11.3447 5.20803 11.6487 5.6642 11.855 6.1663C12.0614 6.66839 12.1661 7.20643 12.1632 7.74928C12.1602 8.29212 12.0496 8.82899 11.8377 9.32879C11.6259 9.8286 11.317 10.2814 10.929 10.6611C10.1564 11.417 9.11672 11.8377 8.03579 11.8318C6.95486 11.8259 5.91989 11.3939 5.15555 10.6295C4.39121 9.86518 3.95919 8.8302 3.95328 7.74928C3.94738 6.66835 4.36806 5.62872 5.124 4.85607ZM7.006 10.2271C7.65976 10.4979 8.39431 10.4978 9.04806 10.227C9.70181 9.95624 10.2212 9.43683 10.492 8.78307C10.7628 8.12931 10.7628 7.39476 10.492 6.74101C10.2212 6.08726 9.70176 5.56785 9.048 5.29707C8.39424 5.02628 7.65969 5.02629 7.00594 5.29709C6.35219 5.5679 5.83279 6.08731 5.562 6.74107C5.29121 7.39483 5.29122 8.12938 5.56203 8.78313C5.83283 9.43688 6.35224 9.95628 7.006 10.2271ZM12.928 4.28507C12.839 4.37404 12.7334 4.44461 12.6172 4.49276C12.5009 4.54092 12.3763 4.5657 12.2505 4.5657C12.1247 4.5657 12.0001 4.54092 11.8838 4.49276C11.7676 4.44461 11.662 4.37404 11.573 4.28507C11.484 4.1961 11.4135 4.09047 11.3653 3.97423C11.3172 3.85798 11.2924 3.73339 11.2924 3.60757C11.2924 3.48175 11.3172 3.35715 11.3653 3.24091C11.4135 3.12466 11.484 3.01904 11.573 2.93007C11.7527 2.75038 11.9964 2.64944 12.2505 2.64944C12.5046 2.64944 12.7483 2.75038 12.928 2.93007C13.1077 3.10975 13.2086 3.35346 13.2086 3.60757C13.2086 3.86168 13.1077 4.10538 12.928 4.28507Z" fill="white" />
                                </svg>
                            </a>
                            <a className="social-media-icons">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.16 1.87C17.5 3.179 17.5 5.95 17.5 5.95C17.5 5.95 17.5 8.721 17.16 10.03C17.0654 10.3987 16.8735 10.7352 16.6043 11.0043C16.3352 11.2735 15.9987 11.4654 15.63 11.56C14.321 11.9 9 11.9 9 11.9C9 11.9 3.679 11.9 2.37 11.56C2.00132 11.4654 1.66483 11.2735 1.39568 11.0043C1.12654 10.7352 0.934626 10.3987 0.84 10.03C0.5 8.721 0.5 5.95 0.5 5.95C0.5 5.95 0.5 3.179 0.84 1.87C0.939156 1.50355 1.13259 1.16947 1.40103 0.901026C1.66947 0.632586 2.00355 0.439156 2.37 0.34C3.679 1.49012e-07 9 0 9 0C9 0 14.321 1.49012e-07 15.63 0.34C15.9965 0.439156 16.3305 0.632586 16.599 0.901026C16.8674 1.16947 17.0608 1.50355 17.16 1.87ZM7.3 8.5L11.72 5.95L7.3 3.4V8.5Z" fill="white" />
                                </svg>

                            </a>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer;