import { KeyValue } from "../../lib/keyboard";
import { getStatuses } from "../../lib/statuses";
import { Key } from "./Key";
import { CheckCircleIcon } from "@heroicons/react/outline";

type Props = {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  guesses: string[];
};

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses);
  console.log(charStatuses);

  const onClick = (value: KeyValue) => {
    if (value === "ENTER") {
      return onEnter();
    }
    if (value === "DELETE") {
      return onDelete();
    }
    return onChar(value);
  };

  return (
    <div lang="tr">
      <div className="flex justify-center mb-1">
        <Key value="e" onClick={onClick} status={charStatuses["e"]} />
        <Key value="r" onClick={onClick} status={charStatuses["r"]} />
        <Key value="t" onClick={onClick} status={charStatuses["t"]} />
        <Key value="y" onClick={onClick} status={charStatuses["y"]} />
        <Key value="u" onClick={onClick} status={charStatuses["u"]} />
        <Key value="ı" onClick={onClick} status={charStatuses["ı"]} />
        <Key value="o" onClick={onClick} status={charStatuses["o"]} />
        <Key value="p" onClick={onClick} status={charStatuses["p"]} />
        <Key value="ğ" onClick={onClick} status={charStatuses["ğ"]} />
        <Key value="ü" onClick={onClick} status={charStatuses["ü"]} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="a" onClick={onClick} status={charStatuses["a"]} />
        <Key value="s" onClick={onClick} status={charStatuses["s"]} />
        <Key value="d" onClick={onClick} status={charStatuses["d"]} />
        <Key value="f" onClick={onClick} status={charStatuses["f"]} />
        <Key value="g" onClick={onClick} status={charStatuses["g"]} />
        <Key value="h" onClick={onClick} status={charStatuses["h"]} />
        <Key value="j" onClick={onClick} status={charStatuses["j"]} />
        <Key value="k" onClick={onClick} status={charStatuses["k"]} />
        <Key value="l" onClick={onClick} status={charStatuses["l"]} />
        <Key value="ş" onClick={onClick} status={charStatuses["ş"]} />
        <Key value="i" onClick={onClick} status={charStatuses["i"]} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          <CheckCircleIcon
                    className="text-base font-bold bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
                    aria-hidden="true"
                  />
        </Key>
        <Key value="z" onClick={onClick} status={charStatuses["z"]} />
        <Key value="c" onClick={onClick} status={charStatuses["c"]} />
        <Key value="v" onClick={onClick} status={charStatuses["v"]} />
        <Key value="b" onClick={onClick} status={charStatuses["b"]} />
        <Key value="n" onClick={onClick} status={charStatuses["n"]} />
        <Key value="m" onClick={onClick} status={charStatuses["m"]} />
        <Key value="ö" onClick={onClick} status={charStatuses["ö"]} />
        <Key value="ç" onClick={onClick} status={charStatuses["ç"]} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Del
        </Key>
      </div>
    </div>
  );
};
