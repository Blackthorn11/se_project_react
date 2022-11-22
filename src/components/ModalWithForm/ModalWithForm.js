import "./ModalWithForm.css";

function ModalWithForm({ isOpen, name, title, buttonText, onClose, children }) {
  return (
    <div
      className={
        isOpen ? `modal modal_type_${name}` : `modal_type_${name} modal_hidden`
      }
    >
      <div className="modal__form-container">
        <button
          className="modal__exit"
          onClick={onClose}
          type="button"
        ></button>
        <h3 className="modal__form-title">{title}</h3>
        <form className="form" name={name}>
          {children}
          <button className="form__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
