export function generateRandomDateValue() {
    let now = new Date()
    let fullYear = String(now.getFullYear())
    let month = String(now.getMonth() + 1).padStart(2, '0')
    let date = String(now.getDate()).padStart(2, '0')
    let hours = String(now.getHours()).padStart(2, '0')
    let minutes = String(now.getMinutes()).padStart(2, '0')
    let seconds = String(now.getSeconds()).padStart(2, '0')
    let ms = String(now.getMilliseconds())

    let uniqueDateValue = fullYear + month + date + hours + minutes + seconds + ms

    return uniqueDateValue
}