const response = await fetch("http://localhost:8080/api/subject/get-all")
export const userData = await response.json()