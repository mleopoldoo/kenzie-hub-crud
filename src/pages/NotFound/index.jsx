import style from "./style.module.scss";

export const NotFound = () => {
  return (
    <main className={style.container}>
      <h1 className="title1">Error: 404</h1>
      <p className="headline">Não foi possível encontrar a página!</p>
    </main>
  );
};
