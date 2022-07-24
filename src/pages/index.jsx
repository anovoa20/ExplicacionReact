import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpg";
import CardRazasPerros from "components/CardRazasPerros";
import Layout from "layouts/Layout";

function Index() {
  return (
    <Layout>
      <section>
        <h1>Razas de Perros</h1>
        <ul className="breedCardContainer">
          <CardRazasPerros
            nombreRaza="Border Collie"
            imagen={borderCollie}
            fondo="backGroundBrown"
          />
          <CardRazasPerros
            nombreRaza="Rhodesian"
            imagen={rhodesian}
            fondo="backGroundPurple"
          />
          <CardRazasPerros
            nombreRaza="Border Collie"
            imagen={borderCollie}
            fondo="backGroundPurple"
          />
        </ul>
      </section>
      <section></section>
    </Layout>
  );
}

export default Index;
