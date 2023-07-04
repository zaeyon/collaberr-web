import Image from 'next/image';
import './Tooltip.css';
import icon_help_fill from '../assets/icons/icon_help-fill.png';
import icon_info from '../assets/icons/icon_info.png';

interface props {
    tooltipWidth: number;
    description: string;
    iconType: string;
}

export default function Tooltip({iconType, description, tooltipWidth}: props) {
    return (
        <span
        className={"tooltip"}>
            <Image
            style={{opacity: 0.6}}
            width={20}
            height={20}
            alt={"icon_help_fill"}
            src={iconType === "help" ? icon_help_fill : iconType === "info" ? icon_info : ""}/>
            <span
            style={{marginLeft: -(tooltipWidth/2), width: tooltipWidth}}
            className={"tooltiptext"}>

            {description.split('\n').map((item, index) => {
                return (
                    <span
                    key={index}>
                    {item}<br/>
                    </span>

                )
            })}
            </span>
        </span>
    )
}