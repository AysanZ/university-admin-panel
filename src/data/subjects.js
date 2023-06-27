const response = await fetch("http://localhost:8081/api/subject/get-all")
export const userData = await response.json()