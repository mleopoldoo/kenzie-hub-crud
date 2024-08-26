import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  const inputClassName = error ? `${style.input} ${style.error}` : style.input;

  return (
    <div className={style.container}>
      <label className="headline">{label}</label>
      <input className={inputClassName} ref={ref} {...rest} />
      {error? <p className="headline headlineError">{error.message}</p> : null}
    </div>
  );
});
