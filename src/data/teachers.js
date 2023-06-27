const response = await fetch("http://localhost:8081/api/teachers/get-all")
export const userData = await response.json()