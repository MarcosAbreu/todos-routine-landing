import { SVG, Path } from "../styles";

function Twitter(props){
    return (
        <SVG width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="38"/>
            <Path d="M0 0L14.6313 21.375L0.309894 38H3.48289L16.0326 23.4219L26.0116 38H38L22.7139 15.6699L36.203 0H33.0397L21.3106 13.6172L11.9884 0H0ZM3.78889 2H10.9379L34.2111 36H27.0621L3.78889 2Z" 
                fill={props.fill}/>
        </SVG>


    )
}

export default Twitter;