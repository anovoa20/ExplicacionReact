import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpg";
import CardRazasPerros from "components/CardRazasPerros";

function Index() {
  return (
    <>
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
          <CardRazasPerros
            nombreRaza="Rhodesian"
            imagen={rhodesian}
            fondo="backGroundPurple"
          />
          <CardRazasPerros
            nombreRaza="Rhodesian"
            imagen={rhodesian}
            fondo="backGroundPurple"
          />
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
        </ul>
      </section>
      <section></section>
    </>
  );
}

export default Index;
