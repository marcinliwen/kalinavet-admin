import moment from "moment"

export const dateToUnixTimestamp = date => {
  if (date instanceof Date) {
    return (date.getTime() / 1000).toFixed(0)
  }
  return null
}

/**
 * The format is: [gt]=number_option
 * e.g: [gt]=2_days
 * @param {*} value
 */

export const relativeDateFormatToTimestamp = dateFormat => {
  let [modifier, value] = dateFormat.split("=")
  let [count, option] = value.split("_")

  // relative days are always subtract
  let date = moment()

  date.subtract(count, option)
  date.hour(0)
  date.minute(0)
  date.second(0)
  date.millisecond(0)

  const result = `${modifier}=${date.format("X")}`

  return result
}