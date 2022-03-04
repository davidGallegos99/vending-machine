
export const FormateDate = (time) => {
    let minutes = time;
    let seconds = 0;
    if(time>=60) {
        minutes = (time/60).toFixed(1)
        const decimals = ((time/60).toFixed(1)%1).toFixed(2);
        seconds = ((decimals*100)*60)/100
        minutes = `${Math.trunc(minutes)}:${seconds} Minutes`
        console.log(minutes);
    }
    else minutes = `${minutes} Seconds`
    return minutes
}