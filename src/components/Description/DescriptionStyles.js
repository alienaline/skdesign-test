import styled from 'styled-components';

export const DescriptionStyles = styled.div`

    .header {
        font-size: 24px;
        font-family: 'SF UI Display';
        font-weight: 600;
        margin: 40px 0;
    }

    .textBlock {
        font-size: 14px;
        font-weight: 400;
        font-family: 'Open Sans', sans-serif;
        margin: 25px 0;
    }

    .link {
        color: #0086A8;
        text-decoration: none;
    }

    @media screen and (max-width: 496px) {
        .header {
            font-size: 20px;
            margin: 20px 0;
        }
    }
`;