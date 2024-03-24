import { SVG, Path } from "./styles";
import { Colors } from "../../../helpers/themes";

function CheckIcon(props){
    return (
        props.check === true
            ? <SVG width={props.width} height={props.height} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M2.5 7.5L7.5 12.5L17.5 2.5" stroke={props.stroke} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </SVG>
            : <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
                <Path d="M11.8374 2.00366L1.99999 11.9999" stroke={Colors.errorPrimary} stroke-width="3" stroke-linecap="round"/>
                <Path d="M12 11.8337L2.00005 1.99996" stroke={Colors.errorPrimary} stroke-width="3" stroke-linecap="round"/>
          </SVG>       
    )
}

export default CheckIcon;