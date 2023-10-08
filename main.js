class VentanaModal {
     constructor() {
          this.closeBtn;
          this.modalPrincipal =
               this.modalPrincipal;
          /*   forma más rápida de
           agregar atributo(variable) */
          this.fondo_de_modal;
          this.botonPaMostrarModal;
     }
     // atributos
     botonPaMostrarModal =
          document.querySelector(
               "#showModalBtn"
          );
     fondo_de_modal =
          document.querySelector(
               "#fondo_of_dialog"
          );
     modalPrincipal =
          document.querySelector(
               "#ventana_modal"
          );
     closeBtn =
          document.querySelector(
               "article  button"
          );
     // metodos
     mostrarVentana_uno() {
          modal.modalPrincipal.style.visibility =
               "visible";
          modal.fondo_de_modal.style.visibility =
               "visible";
     }
     ocultar_Modal_uno() {
          modal.modalPrincipal.style.visibility =
               "hidden";
          modal.fondo_de_modal.style.visibility =
               "hidden";
     }
     ocultar_Modal_uno_con_escape() {
          document.onkeydown = (
               evt
          ) => {
               if (
                    evt.key ===
                    "Escape"
               ) {
                    modal.fondo_de_modal.style.visibility =
                         "hidden";
                    modal.modalPrincipal.style.visibility =
                         "hidden";
                    console.log(
                         "presionó 'escape' "
                    );
               }
          };
     }
     ocultar_fondo_de_modal() {
          modal.fondo_de_modal.style.visibility =
               "hidden";
     }
}
/* creando objeto y llamando
a la fn constructor pa 
inicializar atributos(variables) */
const modal = new VentanaModal();
