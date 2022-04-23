import './main.css';
import adoptaPerritos from "../assets/img/Adopta-Perritos.jpg"
import bichonMaltes from "../assets/img/Bichon-Maltes.jpg"
import bullTerrier from "../assets/img/Bull-Terrier.jpg"
import canicheEnano from "../assets/img/Caniche-Enano.jpg"
import canicheToy from "../assets/img/Caniche-Toy.jpg"
import casasGatos from "../assets/img/Casas-para-gatos.jpg"
import juegosGatos from "../assets/img/Juegos-para-gatos.jpg"
import musicaPerros from "../assets/img/Musica-para-perros.jpg"
import nombreConejos from "../assets/img/Nombres-para-conejos.jpg"
import razasPerros from "../assets/img/Razas-de-perros.jpg"

function Main() {
  return <main className="blog__container">
      <div className="blog__card">
          <img src={bullTerrier} alt="bull terrier"/>
          <div className="blog__info">
          <h2>BULL TERRIER: LA GUÍA COMPLETA DE ESTA RAZA DE PERRO</h2>
          <span className="by">By Patitas / 29 November, 2021</span>
          <p className="parrafo">A la hora de escoger una raza de perro son varios los factores a tomar en cuenta. Si has pensado en un Bull Terrier, aquí podrás leer acerca de esta magnifica raza. Historia del Bull Terrier El Bull Terrier fue concebido para ser utilizado en peleas</p>
          </div>
      </div>
      <div className="blog__card" >
          <img src={casasGatos} alt="casa para gatos"/>
          <div className="blog__info">
          <h2>CASAS PARA GATOS: TODAS LAS VARIEDADES</h2>
          <span>By Patitas / 22 November, 2021</span>
          <p>Hay muchos modelos de casas para gatos y esto hace que no sea fácil elegir la adecuada o la que vaya a gustarle más. Si le prestas atención, es muy posible que tu gato te ayudará a escoger la mejor. El gato, esa mascota divertida que</p>
          </div>
      </div>
      <div className="blog__card" >
              <img src={juegosGatos} alt="juego para Gatos"/>
              <div className="blog__info">
              <h2>JUEGOS PARA GATOS: LOS MÁS POPULARES</h2>
              <span>By Patitas / 15 November, 2021</span>
              <p>Los gatos tienen una forma peculiar de jugar muy distinta a la de los perros. Aquí te mostramos algunos juegos para gatos en caso que quieras pasar un rato divertido con tu mascota. Los gatos, no importa su edad, necesitan jugar. El juego, no solo proporciona</p>
          </div>
      </div>
      <div className="blog__card" >
          <img src={canicheToy} alt="caniche toy"/>
          <div className="blog__info">
          <h2>CANICHE TOY: TODO LO QUE NECESITAS SABER</h2>
          <span>By Patitas / 22 November, 2021</span>
          <p>Si estás buscando un perro pequeño, pero alegre e inteligente, podrías considerar al Caniche Toy. Aquí podrás leer acerca de esta raza. Oriundo de Alemania y criado originalmente para actividades acuáticas de caza de patos, el Caniche Toy pertenece al grupo de perros Toy, que son</p>
          </div>
      </div>
      <div className="blog__card" >
          <img src={adoptaPerritos} alt="adopta perritos"/>
          <div className="blog__info">
          <h2>ADOPTA PERRITOS: CÓMO PUEDES HACERLO</h2>
          <span>By Patitas / 15 November, 2021</span>
          <p>Si estás pensando en incorporar un nuevo miembro a la familia, no dejes de evaluar la opción de adopción. Cuando adoptas perritos, le das una segunda oportunidad al que seguramente se convertirá en un fiel compañero. Adopta perritos, más que un lema A nivel mundial la</p>
          </div>
      </div>
      <div className="blog__card">
          <img src={razasPerros} alt="razas de perros"/>    
          <div className="blog__info">
          <h2>RAZAS DE PERROS PELUDOS: LAS MÁS POPULARES</h2>   
          <span>By Patitas / 8 November, 2021</span>
          <p>Con poco pelo o con mucho pelo, estos compañeros son incondicionales. Aquí te contamos más acerca de las razas de perros peludos. El mundo de los perros crece día a día. Surgen nuevas razas, producto de diversos cruces, de acuerdo a modas o necesidades específicas. Actualmente,</p>  
          </div>
      </div>
      <div className="blog__card">
              <img src={canicheEnano} alt="caniche enano"/>
              <div className="blog__info">
              <h2>CANICHE ENANO: TODO SOBRE ESTA RAZA</h2>
              <span>By Patitas / 8 November, 2021</span>
              <p>Si estás buscando un perro divertido, a lo mejor el Caniche Enano es una buena elección. Aquí podrás leer acerca de esta raza. Donde se originó el Caniche El Caniche o Poodle es el perro nacional de Francia. Sin embargo, hay teorías de que éste se</p>
              </div>
          </div>
      <div className="blog__card">
          <img src={bichonMaltes} alt="bichon maltes"/>
          <div className="blog__info">
          <h2>BICHÓN MALTES: TODO SOBRE ESTA RAZA DE PERROS</h2>
          <span>By Patitas / 2 November, 2021</span>
          <p>Históricamente, los perros han sido excelentes compañeros del hombre. Si en tus planes está el adoptar uno de estos animales, y tienes interés en el Bichón Maltes, aquí podrás leer un poco acerca de esta raza. Origen del Bichón Maltes Como su nombre lo indica.</p>
          </div>
      </div>
      <div className="blog__card">
          <img src={musicaPerros} alt="musica para perros"/>
          <div className="blog__info">
          <h2>MÚSICA PARA PERROS: 7 PLAYLISTS QUE LE PUEDES PONER</h2>
          <span>By Patitas / 26 October, 2021</span>
          <p>Hay estudios que indican que escuchar música tiene cualidades terapéuticas en los seres vivos. La música para perros, entre otras cosas, los ayuda a tranquilizarse y disminuir la ansiedad. Música para perros: ¿Les gusta? Aunque existen diferentes opiniones al respecto, lo que sí se sabe a</p>
          </div>
      </div>
      <div className="blog__card">
          <img src={nombreConejos} alt="nombre para conejos"/>
          <div className="blog__info">
          <h2>NOMBRES PARA CONEJOS: 60 IDEAS INCREÍBLES</h2>
          <span>By Patitas / 18 October, 2021</span>
          <p>Si acabas de adoptar a un conejo como mascota lo primero que debes hacer es buscarle nombre. Como la tarea no es fácil, aquí te ayudamos con algunas ideas de nombres para conejos. Ponerle nombre a tu conejo puede llegar a ser una tarea difícil, especialmente</p>
          </div>
      </div>
</main>
}

export { Main };