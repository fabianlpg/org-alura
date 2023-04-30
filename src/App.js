import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import MisEquipos from './components/MisEquipos';
import Footer from './components/Footer';
import hexToRgba from 'hex-to-rgba';

// React Notification
//import 'react-notifications/lib/notifications.css';
import "./notificationsCustom.css";
import { NotificationContainer } from 'react-notifications';


function App() {
  //const para establecer el state de App
  const [mostrarForm, actualizarMostrar] = useState(true);
  const [mostrarEquipos, actualizarEquipos] = useState(true);

  //para el uso de los colaboradores, empieza como un arreglo
  const [colaboradores, updateColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      url: "https://github.com/harlandlohora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://i.imgur.com/3fnnMy7.png",
      nombre: "Fabian López",
      puesto: "Estudiante",
      url: "https://i.imgur.com/3fnnMy7.png",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      url: "https://github.com/genesysaluralatam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e instructor",
      url: "https://github.com/christianpva",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      url: "https://github.com/JeanmarieAluraLatam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      url: "https://github.com/JoseDarioGonzalezCha",
      fav: false
    }
  ])
  //para el uso de los equipos, empieza como un arreglo
  const [equipos, actualizarEquiposColor] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorFondo: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorFondo: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorFondo: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorFondo: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorFondo: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorFondo: "#FFEEDF"
    }
  ])
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm)
  }

  const cambiarEquipos = () => {
    actualizarEquipos(!mostrarEquipos)
  }

  //función que vamos a mandar como props en el componente Formulario
  const registrarColaborador = (colaborador) => {
    updateColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    updateColaboradores(nuevosColaboradores)
    console.log(nuevosColaboradores)
  }

  //Like o dislike al colaborador 
  const likeColaborador = (id) => {
    const colaboradorLike = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    updateColaboradores(colaboradorLike)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((data) => {
      if (data.id === id) {
        data.colorPrimario = color
      }
      return data
    })
    actualizarEquiposColor(equiposActualizados)
  }

  //Crear nuevo equipo
  const newTeam = (nuevoEquipo) => {
    actualizarEquiposColor([...equipos, { ...nuevoEquipo, id: uuid(), colorFondo: hexToRgba(nuevoEquipo.colorPrimario, 0.6) }])
  }

  return (
    <div>
      <Header />
      {
        mostrarForm && <Formulario
          equipos={equipos.map((data) => data.titulo)}
          teams={equipos}
          registrarColaborador={registrarColaborador}
          newTeam={newTeam}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        mostrarEquipos && equipos.map((data) => <Equipo
          datos={data}
          key={data.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === data.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          likeColaborador={likeColaborador}
        />
        )
      }
      <MisEquipos cambiarEquipos={cambiarEquipos} />
      <NotificationContainer />
      <Footer />
    </div>
  );
}

export default App;
