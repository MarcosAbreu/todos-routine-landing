import {createGlobalStyle} from 'styled-components';
import {Colors} from './helpers/themes';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter";
    }

    ::-webkit-scrollbar{
        width: 0.5em;
        height: 0.5em;
    }

    ::-webkit-scrollbar-track{
        background-color: ${Colors.scrollbarTrack};
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${Colors.scrollbarThumb};
        border-radius: 6px;
        border: 1px solid ${Colors.scrollbarTrack};
    }

    ::-webkit-scrollbar-thumb:hover{
        background-color: ${Colors.scrollbarHover};
    }

    @supports ( scrollbar-color: ${Colors.scrollbarThumb} ${Colors.scrollbarTrack} ){
        * {
            scrollbar-color: ${Colors.scrollbarThumb} ${Colors.scrollbarTrack} ;
            scrollbar-width: thin;
        }
    }
`;