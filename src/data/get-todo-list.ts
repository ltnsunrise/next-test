// import "server-only";

function getTodoList() {
  return fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
      return [];
    });
}

export { getTodoList };
