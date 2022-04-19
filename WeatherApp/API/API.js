export const url = "https://api.openweathermap.org/data/2.5/weather"
export const key = "0bb2b7d89ad3bb5ac33d82985a31f549"

export const getLocation = async (locationName)=> {
    const response = await fetch(url + "?q=" + locationName + "&appid=" + key)
    const data = await response.json()
    return data
    }