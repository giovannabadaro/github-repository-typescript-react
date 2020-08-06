import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

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
  const [ repositories, setRepositories ] = useState<Repository[]>([]);
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
  
  return(
    <>
      <img 
        src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
        alt="git hub explorer"
      />

      <Title>
          Explore repositórios no GitHub
      </Title>

      <Form onSubmit={handleAddRepository}>
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
          <a key={repository.full_name} href="teste">
          <img
          src={repository.owner.avatar_url}
          alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={30} />
        </a>
       ))}
      </Repositories>
    </>
  );
};

export default Dashboard;