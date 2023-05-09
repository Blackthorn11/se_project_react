import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  isOpen,
  onClose,
  currentUser,
  handleEditProfile,
  isLoading,
}) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleEditProfile(name, avatar);
    history.push("/profile");
  }

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Edit Profile"
      buttonText={isLoading ? "Saving..." : "Save"}
      onClose={onClose}
      handleSubmit={handleSubmit}
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
