// const baseUrl =
//   "https://my-json-server.typicode.com/blackthorn11/se_project_react";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrweb.mooo.com"
    : "http://localhost:3001";

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItems = async () => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleServerResponse(res);
};

const addItem = async (name, imageUrl, weather) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
  return handleServerResponse(res);
};

const removeItem = async (id) => {
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return handleServerResponse(res);
};

const editUserInfo = async (name, avatar) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  });
  return handleServerResponse(res);
};

const addLike = async (id) => {
  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return handleServerResponse(res);
};

const removeLike = async (id) => {
  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return handleServerResponse(res);
};

export {
  getItems,
  addItem,
  removeItem,
  baseUrl,
  handleServerResponse,
  editUserInfo,
  addLike,
  removeLike,
};
