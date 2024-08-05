import { forwardRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import style from "./style.module.scss";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);

  const inputClassName = error ? `${style.input} ${style.error}` : style.input;

  return (
    <div className={style.container}>
      <label className="headline">{label}</label>
      <div className={style.input__pass}>
        <input
          type={isHidden ? "text" : "password"}
          ref={ref}
          className={inputClassName}
          {...rest}
        />
        {error? <p className="headline headlineError">{error.message}</p> : null}
        <button
          type="button"
          className={style.btn__eye}
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
    </div>
  );
});
