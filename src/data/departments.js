const response = await fetch("http://localhost:8080/api/department/get-all")
export const userData = await response.json()