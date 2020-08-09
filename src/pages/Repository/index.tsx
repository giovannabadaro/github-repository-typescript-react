import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>

        <img
          src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
          alt="git hub explorer"
        />

        <Link to="/dashboard">
          <FiChevronsLeft size={16} />
        Voltar
      </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/29736189?s=400&u=698ae6f217cb4fe0aeacd72f7cf2331a0c0527a1&v=4"
            alt=""
          />
          <div>
            <strong>
              rocketseat/unform
            </strong>
            <p>
              descrição do repositório
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>

      </RepositoryInfo>

      <Issues>
        <Link
           to="kdf">
          <div>
            <strong>sdfdsf</strong>
            <p>sdfsdf</p>
          </div>
          <FiChevronRight size={30} />
        </ Link>
      </Issues>


    </>
  );
};

export default Repository;