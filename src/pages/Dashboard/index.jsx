import { Header } from "../../components/Header";
import style from "./style.module.scss";

export const Dashboard = ({ user, userLogout }) => {
  return (
    <>
      <Header userLogout={userLogout} />

      <main className={style.container}>
        <div className={style.info__user}>
          <p className="title1">Olá, {user?.name}</p>
          <p className="headline headlineBold">{user?.course_module}</p>
        </div>
        <div className={style.info__page}>
          <h1 className="title1">Que pena estamos em desenvolvimento :(</h1>
          <p className="headline">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </>
  );
};
