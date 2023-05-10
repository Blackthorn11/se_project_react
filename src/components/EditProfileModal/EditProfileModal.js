import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  isOpen,
  onClose,
  currentUser,
  handleEditProfile,
  isLoading,
}) => {
  const [name, setName] = useState(currentUser.name ?? "");
  const [avatar, setAvatar] = useState(currentUser.avatar ?? "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleEditProfile(name, avatar);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <h4 className="form__heading">Name</h4>
      <input
        className="form__input form__input_type_name"
        name="name"
        type="text"
        placeholder="Name"
        id="name"
        required
        onChange={handleName}
        value={name}
        minLength={2}
        maxLength={30}
      />
      <h4 className="form__heading">Avatar URL</h4>
      <input
        className="form__input form__input_type_image"
        name="Avatar URL"
        type="text"
        placeholder="Avatar URL"
        id="avatar-URL"
        required
        onChange={handleAvatar}
        value={avatar}
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
