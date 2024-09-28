import * as React from 'react';
import { IHomeComponentProps } from './IHomeComponent';
import CarousalHomePage from '../Carousal/Carousal';
import CategoryCards from './CategoryCards';
import Description from './Desciption';
import TeamDescription from './TeamDescription';
import Sections from './Sections';


const HomeComponent: React.FunctionComponent<IHomeComponentProps> = () => {
    return (
        <>
            <CarousalHomePage></CarousalHomePage>
            <Description /> 
            <CategoryCards />
            <Sections />
            <TeamDescription />
        </>
    )
}
export default HomeComponent