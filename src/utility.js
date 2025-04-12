const URL = `${import.meta.env.VITE_API_URL}/people/nm0002354`;

export async function getPersonDetails() {
  
  const token = localStorage.getItem("token");

  return await fetch(URL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
    .then((res) =>
      res.json().then((res) => {
        console.log(res);
      })
    )
    .catch((error) => console.log(error));
};