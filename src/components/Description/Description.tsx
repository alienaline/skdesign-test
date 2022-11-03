import React from 'react';
import { DescriptionStyles } from './DescriptionStyles';
import Header from './Header/Header';
import TextBlock from './TextBlock/TextBlock';

function Description(): JSX.Element {
    return (
        <DescriptionStyles>
            <Header value='Оставьте заявку и станьте частью нашей команды'/>
            <TextBlock> 
                Компания SK Design приглашает 
                к взаимовыгодному сотрудничеству креативных дизайнеров, 
                архитекторов и декораторов, <br/> дизайн-бюро и интерьерные студии — все, 
                кто дизайн интерьера сделали своим призванием.
            </TextBlock>
            <TextBlock>
                Партнерство мы видим как доверительные отношения, 
                основанные на честности реализации бизнес идей 
                в сфере создания и продаж современной, качественной, 
                удобной, функциональной и эксклюзивной мебели.
            </TextBlock>
            <TextBlock>
                Ознакомиться с проектами можете в нашем &nbsp;
                <span className='link'><a className='link' href='https://skdesign.ru/portfolio'>портфолио</a></span>.
                Если Вы оформляете интерьеры жилых или коммерческих помещений 
                — мы с радостью поможем Вам: составим уникальные условия сотрудничества,
                предоставим 3D модели (уточняйте у менеджеров) 
                и разработаем коммерческое предложение к Вашему проекту или изображениям.
            </TextBlock>
        </DescriptionStyles>
    );
}

export default Description;

