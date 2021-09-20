import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedbackBase,
} from "react-native";

const App = () => {
  const [modalVisibleHabitacionUno,  setModalVisibleHabitacionUno] = useState(false);
  const [modalVisibleHabitacionDos,  setModalVisibleHabitacionDos] = useState(false);
  const [modalVisibleHabitacionTres,  setModalVisibleHabitacionTres] = useState(false);
  const [modalVisibleHabitacionCuatro,  setModalVisibleHabitacionCuatro] = useState(false);
  const [modalVisibleHabitacionCinco,  setModalVisibleHabitacionCinco] = useState(false);

  const [modalVisibleServicioUno,  setModalVisibleServicioUno] = useState(false);
  const [modalVisibleServicioDos,  setModalVisibleServicioDos] = useState(false);
  const [modalVisibleServicioTres,  setModalVisibleServicioTres] = useState(false);
  const [modalVisibleServicioCuatro,  setModalVisibleServicioCuatro] = useState(false);

  const [modalVisibleLugarUno,  setModalVisibleLugarUno] = useState(false);
  const [modalVisibleLugarDos,  setModalVisibleLugarDos] = useState(false);
  const [modalVisibleLugarTres,  setModalVisibleLugarTres] = useState(false);
  const [modalVisibleLugarCuatro,  setModalVisibleLugarCuatro] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionUno}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Individual</Text>
              <Text style={styles.texto}>
              Una habitación para un huésped con una cama individual.
              Puede variar entre los 8 y los 14 metros cuadrados.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionUno(!modalVisibleHabitacionUno);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionDos}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Twin</Text>
              <Text style={styles.texto}>
              Se trata de una habitación para 2 personas.
              Su principal característica es que tiene dos camas individuales
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionDos(!modalVisibleHabitacionDos);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionTres}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Dobles</Text>
              <Text style={styles.texto}>
              También se trata de una habitación para dos personas, pero en este caso con una cama doble.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionTres(!modalVisibleHabitacionTres);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionCuatro}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Triples</Text>
              <Text style={styles.texto}>
              Estas habitaciones para tres personas cuenta con tres camas individuales.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionCuatro(!modalVisibleHabitacionCuatro);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleHabitacionCinco}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Cuatruples</Text>
              <Text style={styles.texto}>
              Esta habitación está preparada para albergar a 4 huéspedes
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleHabitacionCinco(!modalVisibleHabitacionCinco);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleServicioUno}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Catering</Text>
              <Text style={styles.texto}>
              Servicio de alimentación institucional o alimentación
              colectiva que provee una cantidad determinada de comida
              y bebida en fiestas, eventos y presentaciones de diversa índole.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleServicioUno(!modalVisibleServicioUno);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleServicioDos}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Guía de excursión</Text>
              <Text style={styles.texto}>
              Los guías ofrecen un tour informativo y entretenido al rededor del hotel.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleServicioDos(!modalVisibleServicioDos);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleServicioTres}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Gimnasio</Text>
              <Text style={styles.texto}>
              Un lugar que permite practicar deportes o hacer ejercicio
              con varias máquinas y artículos deportivos a disposición
              de quienes lo visiten.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleServicioTres(!modalVisibleServicioTres);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleServicioCuatro}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Piscina y Spa</Text>
              <Text  style={styles.texto}>
              Piscina con sistema de hidromasaje, este es un sistema
              beneficioso para la salud, la belleza y el bienestar.
              Ayuda a la eliminación del estrés, calma la ansiedad y
              la tensión muscular, activa la circulación sanguínea o
              fortalece los músculos.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleServicioCuatro(!modalVisibleServicioCuatro);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLugarUno}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Canoa</Text>
              <Text  style={styles.texto}>
              Ruta en canoa entre ríos, disfruta en un entorno
              único en el Lira Hotel. Salidas diarias por la mañana
              y la tarde. No hace falta experiencia previa. La
              mejor ruta en canoa. Por la orilla del río.
              Precios para grupos.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLugarUno(!modalVisibleLugarUno);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLugarDos}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Kite Surf</Text>
              <Text  style={styles.texto}>
              El kite surf, es un deporte acuático de deslizamiento
              que consiste en el uso de una cometa de tracción que
              propulsa al deportista (kiter), de la cometa salen
              dos líneas exteriores que se unen a la barra donde
              el deportista se agarra y otras 2 ó 3 restantes
              pasan por el centro de la barra y se sujetan al
              cuerpo con un arnés, permitiendo deslizarse sobre
              el agua mediante una tabla.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLugarDos(!modalVisibleLugarDos);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLugarTres}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Recorrido en bicicleta</Text>
              <Text  style={styles.texto}>
              Los mejores recorridos en bicicleta del mundo.
              A lo largo del recorrido se encuentran diferentes
              zonas y paisajes dignos y apropiados para que los
              amantes del ciclismo los recorran.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLugarTres(!modalVisibleLugarTres);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleLugarCuatro}
          onRequestClose={() => {
            alert("Modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Museo</Text>
              <Text  style={styles.texto}>
              Abierto al público, que adquiere, conserva, investiga,
              comunica y expone el patrimonio material e inmaterial de
              la humanidad y su medio ambiente con fines de educación,
              estudio y recreo.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleLugarCuatro(!modalVisibleLugarCuatro);
                }}
              ></Button>
            </View>
          </View>
        </Modal>


      <View style={styles.fondo}>
          <View style={styles.encabezado}>
            <Image
            style={styles.logo}
              source={require("./src/img/logo.jpg")}
            />
          </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.banner}
            source={require("./src/img/banner1.jpg")}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Tipos de habitaciones</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionUno(!modalVisibleHabitacionUno);
                }}
              >
                <Image
                  style={styles.ciudad}
                  source={require("./src/img/habitacion1.jpg")}
                />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionDos(!modalVisibleHabitacionDos);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("./src/img/habitacion2.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionTres(!modalVisibleHabitacionTres);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("./src/img/habitacion3.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionCuatro(!modalVisibleHabitacionCuatro);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("./src/img/habitacion4.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleHabitacionCinco(!modalVisibleHabitacionCinco);
                }}
              >
              <Image
                style={styles.ciudad}
                source={require("./src/img/habitacion5.jpg")}
              />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>



        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Servicios para los huespedes</Text>
          <View>
            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleServicioUno(!modalVisibleServicioUno);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/servicio1.jpg")}
              />
            </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleServicioDos(!modalVisibleServicioDos);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/servicio2.jpg")}
              />
            </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleServicioTres(!modalVisibleServicioTres);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/servicio3.jpg")}
              />
            </TouchableHighlight>
            </View>

            <View>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleServicioCuatro(!modalVisibleServicioCuatro);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/servicio4.jpg")}
              />
            </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>
            Lugares de interes cercanos del hotel
          </Text>
          <View style={styles.listado}>
            <View style={styles.litaItem}>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleLugarUno(!modalVisibleLugarUno);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/lugares1.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View style={styles.litaItem}>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleLugarDos(!modalVisibleLugarDos);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/lugares2.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View style={styles.litaItem}>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleLugarTres(!modalVisibleLugarTres);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/lugares3.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View style={styles.litaItem}>
            <TouchableHighlight
                onPress={() => {
                  setModalVisibleLugarCuatro(!modalVisibleLugarCuatro);
                }}
              >
              <Image
                style={styles.mejores}
                source={require("./src/img/lugares4.jpg")}
              />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 150,
    flex: 1,
  },
  logo: {
    height: 80,
    width:250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#34495e",
    color: "white",
    padding: 5,
  },
  encabezado: {
    marginTop: 30,
    marginBottom:0,
    flex: 1,
    alignItems: "center",
    padding:10,
  },
  contenedor: {
    marginHorizontal: 5,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  litaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal: {
    backgroundColor: "#34495eaa",
    flex: 1,
  },
  Modal: {
    backgroundColor: "#fff",
    justifyContent:'center',
    alignItems:'center',
    padding: 30,
    borderRadius: 30,
    marginLeft:20,
    marginRight:20,
    marginTop:300,
  },
  texto: {
    textAlign:'justify'
  },
  subtitulo: {
    fontWeight: "bold",
    color:'black',
    fontSize: 14,
    justifyContent: "center",
  },
  fondo:{
    backgroundColor: 'white',
  }
});

export default App;
