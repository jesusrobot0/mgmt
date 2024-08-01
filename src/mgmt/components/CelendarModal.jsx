import { useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addHours, differenceInSeconds } from "date-fns";
import { es } from "date-fns/locale/es";
import Swal from "sweetalert2";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const initialState = {
  title: "Cumpleaños del Jefe",
  notes: "Comprar el pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
};

Modal.setAppElement("#root");

export function CelendarModal() {
  const [isOpen, setisOpen] = useState(true);
  const [formValues, setFormValues] = useState(initialState);

  const handleCloseModal = () => {
    setisOpen(false);
  };

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // changing puede ser start o end
  const handleDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { start, end, title } = formValues;

    const dateDifference = differenceInSeconds(end, start);

    if (isNaN(dateDifference) || dateDifference <= 0) {
      console.log("error en fechas");
      Swal.fire("Fechas incorrectas", "Revisa las fechas ingresadas", "error");
      return;
    }

    if (title.length <= 0) {
      return;
    }

    // todo: cerrar modal
    // todo: reestablecer el formulario
    // todo: remover erroresen pantalla
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1 className="text-3xl text-[#222] mb-4">Agregar evento</h1>
      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <span>Título</span>
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-md"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Notas</span>
          <textarea
            className="border border-gray-400 resize-none h-[100px] p-2 rounded-md"
            name="notes"
            value={formValues.notes}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <label className="flex flex-col gap-2">
          <span>Fecha de inicio</span>
          <DatePicker
            selected={formValues.start}
            className="border w-full border-gray-400 p-2 rounded-md"
            onChange={(event) => handleDateChange(event, "start")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Fecha de finalización</span>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            className="border w-full border-gray-400 p-2 rounded-md"
            onChange={(event) => handleDateChange(event, "end")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </label>

        <input
          type="submit"
          className="mt-6 p-3 text-white font-bold rounded-md bg-[#007aff] w-[200px] cursor-pointer"
          value="Guardar"
        />
      </form>
    </Modal>
  );
}
