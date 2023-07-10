import './Checkbox.scss';
import Image from 'next/image';
import classNames from 'classnames';

import icon_selected from '@/app/assets/icons/icon_selected.png';

interface props {
    clickCheckbox: any;
    selected: boolean | undefined;
    index?: number;
}

export default function Checkbox({clickCheckbox, selected, index}: props) {
    
    if(selected) {
        return (
        <Image
        onClick={() => clickCheckbox(index)}
        width={24}
        height={24}
        src={icon_selected}
        alt={"icon_selected"}
        />
        )
    } else {
        return (
            <div
            onClick={() => clickCheckbox(index)}
            className={"checkbox"}>
            </div>
        )
    }
}