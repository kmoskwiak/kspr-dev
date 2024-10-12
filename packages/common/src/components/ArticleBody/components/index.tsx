import { ExtraProps } from "react-markdown";
import { CTA } from "./CTA";
import { Img } from "./img";

export const components = {
    CTA: CTA,
    Img: Img
}

type Props = React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & ExtraProps

export const handleCustomComponent = (props: Props) => {
    if (props.src.startsWith('component/')) {
        const componentName = props.src.split('/')[1].split('?')[0];
        const componentProps = {};
        const searchParams = new URLSearchParams(props.src.split('?')[1]);
        for (const [key, value] of searchParams.entries()) {
            componentProps[key] = value;
        }
        const CustomComponent = components[componentName];
        return (
            <CustomComponent {...componentProps} />
        )
    } else {
        return (
            <Img {...props} />
        )
    }

}