
export const FormateDate = (time) => {
    let result = Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : '00')
    return `${result} ${time > 60 ? 'Minutes' : 'Seconds'}`
}

export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}