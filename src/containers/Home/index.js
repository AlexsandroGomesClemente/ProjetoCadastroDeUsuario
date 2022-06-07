import * as React from "react";
import {
  Container,
  Img,
  H1,
  Label,
  Input,
  Button,
  ContainerItem,
  User,
} from "./styles";
import axios from "axios";
import Arrow from "../../assets/arrow.svg";
import People1 from "../../assets/people1.svg";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const name = React.useRef();
  const age = React.useRef();

  async function registerUser() {
    const { status } = await axios.post("http://localhost:3001/users", {
      name: name.current.value,
      idade: age.current.value,
    });

    history.push("/Users");
  }

  return (
    <div className="App">
      <Container>
        <Img alt="logo img" style={{ marginTop: 30 }} src={People1} />
        <ContainerItem>
          <H1>Olá</H1>
          <Label>Nome</Label>
          <Input ref={name} placeholder="Nome" type="text" />
          <Label>Idade</Label>
          <Input ref={age} placeholder="Idade" type="number" />
          <Button onClick={registerUser}>
            Cadastrar
            <Img alt="arrow img" src={Arrow} />
          </Button>
        </ContainerItem>
      </Container>
    </div>
  );
}

export default Home;
