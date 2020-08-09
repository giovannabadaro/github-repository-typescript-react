import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;

  }
}

const Dashboard: React.FC = () => {
  const [ newRepo, setNewRepo]  = useState('');
  const [ repositories, setRepositories ] = useState<Repository[]>(()=> {
    const storagedRepositories = localStorage.getItem('@githubExplorer: repositories');

    if(storagedRepositories){
      return JSON.parse(storagedRepositories);
    }else {
      return [];
    }
  });
  
  const [ inputError, setInputError ] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();
    
    try {
      if(!newRepo) {
        setInputError('Digite autor/nome do repositorio');
        return;
      }
      const response = await api.get(`repos/${newRepo}`);
  
      const repository = response.data;
  
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch (err) {
      setInputError('Erro na busca do repositório');
    }

  }
  useEffect(() => {
    localStorage.setItem('@githubExplorer: repositories', JSON.stringify(repositories));
    },[repositories]);

  return(
    <>
      <img 
        src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
        alt="git hub explorer"
      />

      <Title>
          Explore repositórios no GitHub
      </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
         value={newRepo}
         onChange={ (e) => setNewRepo(e.target.value)}
         placeholder="Digite o nome do repositório"
        />
        <button type="submit">
          Pesquisar
        </button>
      </Form>

     { inputError && <Error>{inputError}</Error> }

      <Repositories>
       {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={30} />
        </ Link>
       ))}
      </Repositories>
    </>
  );
};

export default Dashboard;