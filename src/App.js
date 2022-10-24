import Header from "./components/header";
import Footer from "./components/footer";
import Section from "./components/section";
import "./App.css";

import ODS15 from './assets/images/ODS15.jpg';
import ODS03 from './assets/images/ODS03.jpg'

function App() {
  const sectionsList = [
    {
      id: 1,
      image: {
        src: ODS15,
        alt: "ODS 15: Vida Terrestre",
      },
      title: "Reflorestamendo do Pão de Açúcar",
      description:
        "Os incêndios eram constantes em um dos mais famosos cartões postais do Rio de Janeiro. A iniciativa se deu a partir de 3 montanhistas, em 2002. No ano seguinte, o trio de dividiu para realizar o plantio de mudas nativas nas encostas. A partir de 2004, os mutirões já eram abertos e ocorriam mensalmente, contando com o apoio da Secretaria Municipal de Meio Ambiente para o fornecimento das mudas.",
    },
    {
      id: 2,
      image: {
        src:ODS03,
        alt: "ODS 3: Saúde e Bem-Estar",
      },
      title: "Programa Vacina na Escola",
      description:
        "Durante a pandemia de covid-19, a prefeitura do Rio lançou o Programa Vacina na Escola. Com o intuito de conscientizar as famílias sobre a importância de vacinar suas crianças contra o vírus, principalmente os da faixa etária entre 5 e 11 anos. A vacinação ocorre na própria instituição, ao fim do turno do estudante ao qual a autorização foi dada pelos pais ou responsáveis.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {sectionsList.map((item) => (
          <Section
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
