import { ButtonComp } from './styles';

function Button({width,height,backgroundColor,fontSize,fontWeight,borderColor,border,color,boxShadow,hover,onClick,title}){
    return(
        <ButtonComp 
            width={width}
            height={height}
            $backgroundcolor={backgroundColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            $bordercolor={borderColor}
            $border={border}
            color={color}
            $boxshadow={boxShadow}
            $hover={hover}
            onClick={onClick}>
                {title}
        </ButtonComp>
    );
}

export default Button;