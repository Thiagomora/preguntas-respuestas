import { useLocation, Link } from 'react-router-dom';
export function Results () {
  const location = useLocation();
  const { score, total } = location.state;

  return (
    <div>
      <h1>Resultados</h1>
      <p>
        Tu record {score} de {total}.
      </p>
      <Link to="/">
        <button>Volver a jugar</button>
      </Link>
    </div>
  );
}
