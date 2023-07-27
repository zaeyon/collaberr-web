import "./Checkbox.scss";
import Image from "next/image";
import classNames from "classnames";

import icon_selected from "@/app/assets/icons/icon_selected.png";

interface props {
  clickCheckbox: any;
  selected: boolean | undefined;
  index?: number;
  label?: string;
  viewTerms?: string;
}

export default function Checkbox({
  clickCheckbox,
  selected,
  index,
  label,
  viewTerms,
}: props) {
  if (selected) {
    return (
      <div className="container">
        <Image
          style={{ cursor: "pointer", marginBottom: 0, padding: 0 }}
          onClick={() => clickCheckbox(index)}
          width={24}
          height={24}
          src={icon_selected}
          alt={"icon_selected"}
        />
        {label && (
          <span className="label">
            {viewTerms && <span className="viewTerms">{viewTerms}</span>}
            {label}
          </span>
        )}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div onClick={() => clickCheckbox(index)} className={"checkbox"}></div>
        {label && (
          <span className="label">
            {viewTerms && <span className="viewTerms">{viewTerms}</span>}
            {label}
          </span>
        )}
      </div>
    );
  }
}
