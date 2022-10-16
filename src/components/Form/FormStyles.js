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

    .fieldset {
        border: 2px solid ${colors.fieldsetBorder};
        border-radius: 8px;
        color: ${colors.fieldsetText};
        font-family: 'SF UI Display', sans-serif;
        font-size: 12px;
        margin: 0;
    }

    .focuseFieldset {
        border: 2px solid ${colors.buttonSubmit};
    }

    .legend {
        padding: 0 5px;
    }

    .focuseLegend {
        color: ${colors.buttonSubmit};
    }

    .input {
        font-size: 14px;
        width: 100%;
        padding: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        &::placeholder {
            color: ${colors.placeholder};
        }
    }

    .selectData {
        grid-column: 1 / span 2;
        grid-row: 3;
    }

    .optionalInputs > *,
    .options > * {
        margin: 20px 0;
    }
    
    .options :last-child,
    .options {
        margin-bottom: 0;
    }

    .buttonShowOptions {
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        color: ${colors.blackText};
        font-size: 14px;
    }

    .buttonShowSelectData {
        width: 100%;
        padding: 11px 5px 8px 5px;
        position: relative;
    }

    .focuseButton {
        color: white;
        padding: 4px 5px;
    }
    
    .arrow {
        border: solid ${colors.blackText};
        border-width: 0 1.5px 1.5px 0;
        border-radius: 15%;
        position: relative;
        padding: 3px;
        margin: 0px 8px;
        transition: all 0.5s ease;
    }

    .up {
        transform: rotate(-135deg);
        top: 3px;
    }

    .down {
        transform: rotate(45deg);
    }

    .selectDataList {
        list-style: none;
        padding: 0;
        margin: 5px 0;
        border: 2px solid ${colors.fieldsetBorder};
        box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
        border-radius: 8px;
        position: absolute;
        background-color: white;
        & > * {
            border-bottom: 2px solid ${colors.fieldsetBorder};
        }
        & :last-child {
            border-bottom: none;
        }
    }

    .selectItem {
        padding: 5px 17px;
        cursor: pointer;
    }

    .buttonSubmit {
        padding: 18px;
        margin: 20px 0 0 0;
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
`;