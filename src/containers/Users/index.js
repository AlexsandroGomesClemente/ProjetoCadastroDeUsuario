import * as React from "react";
import {
  Container,
  Img,
  Img2,
  H1,
  Label,
  Input,
  Button,
  ContainerItem,
  User,
} from "./styles";
import axios from "axios";
import Lixeira from "../../assets/lixeira.svg";
import Arrow from "../../assets/arrow.svg";
import People2 from "../../assets/people2.svg";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getUser = async (user) => {
      const { data } = await axios.get("http://localhost:3001/users");
      setUsers(data);
    };

    getUser();
  }, []);

  async function deleteUser(id) {
    const { data } = await axios.delete(`http://localhost:3001/users/${id}`);
    setUsers(data);
  }

  return (
    <div className="App">
      <Container>
        <Img alt="logo img" style={{ marginTop: 30 }} src={People2} />
        <ContainerItem>
          <H1>Usuarios</H1>
          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.idade}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Lixeira} />
                </button>
              </User>
            ))}
          </ul>
          <Link to="/">
            <Button>
              <Img2 alt="arrow img" src={Arrow} />
              Voltar
            </Button>
          </Link>
        </ContainerItem>
      </Container>
    </div>
  );
}

export default Users;
