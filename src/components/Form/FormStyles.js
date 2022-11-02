import styled from 'styled-components';

const colors = {
    fieldsetBorder: '#E3E3E3',
    fieldsetText: '#828282',
    placeholder: '#CDCAD0',
    buttonSubmit: '#0086A8',
    buttonSubmitHover: '#007693',
    buttonSubmitActive: '#00657E',
    buttonSubmitDisabled: '#E3E3E3',
    disabledText: '#828282',
    blackText: '#353238'
};

export const FormStyles = styled.div`
    width: 440px;
    box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
    border-radius: 8px;

    .formContainer {
        padding: 40px 30px;
    }

    .requireInputs {
        display: grid;
        grid-template-columns: repeat(2, 180px);
        grid-template-rows: auto auto;
        gap: 20px 17px;
    }

    .selectDataCities {
        grid-column: 1 / span 2;
        grid-row: 3;
    }

    .selectDataSources {
        margin: 20px 0 0 0;
    }

    .optionalInputs {
        display: grid;
        gap: 20px;
        margin: 20px 0;
    }

    .options > * {
        width: 100%;
    }

    .buttonShowOptions {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${colors.blackText};
        font-size: 14px;
    }
    
    .arrow {
        border: solid ${colors.blackText};
        border-width: 0 1.5px 1.5px 0;
        border-radius: 15%;
        position: relative;
        padding: 3px;
        margin: 0px 8px;
        transition: all 0.5s ease;
        &[data-state='up'] {
            transform: rotate(-135deg);
            top: 3px;
        }
        &[data-state='down'] {
            transform: rotate(45deg);
            top: 0px;
        }
    }

    .buttonSubmit {
        padding: 18px;
        background-color: ${colors.buttonSubmit};
        border-radius: 8px;
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        width: 100%;
        transition: all 0.5s ease;
        &:hover {
            background-color: ${colors.buttonSubmitHover};
        }
        &:active {
            background-color: ${colors.buttonSubmitActive};
        }
    }

    .buttonSubmit[disabled] {
        background-color: ${colors.buttonSubmitDisabled};
        color: ${colors.disabledText};
    }

    @media screen and (max-width: 910px) {
        width: 100%;
        
        .requireInputs {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 496px) {
        font-size: 11px;

        .formContainer {
            padding: 30px 20px;
        }

        .requireInputs {
            grid-template-columns: repeat(2, 1fr);
        }

        .fieldset,
        .legend  {
            font-size: 11px;
        }
    }

    @media screen and (max-width: 392px) {
        font-size: 11px;
    }
`;