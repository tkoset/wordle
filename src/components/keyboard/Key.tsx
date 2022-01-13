import { ReactNode } from "react";
import classnames from "classnames";
import { KeyValue } from "../../lib/keyboard";
import { CharStatus } from "../../lib/statuses";

type Props = {
  children?: ReactNode;
  value: KeyValue;
  width?: number;
  status?: CharStatus;
  onClick: (value: KeyValue) => void;
};

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
}: Props) => {
  const classes = classnames(
    "flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer",
    {
      "bg-gray-200 hover:bg-gray-300 active:bg-gray-400": !status,
      "bg-gray-400 text-white": status === "absent",
      "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white":
        status === "correct",
      "bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white":
        status === "present",
    }
  );

  return (
    <div
      style={{ width: `${width}px`, height: "58px" }}
      className={classes}
      onClick={() => onClick(value)}
    >
      {children || value}
    </div>
  );
};
