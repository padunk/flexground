const REGEX = /[A-Z]/g

export function changeObjectToString(props) {
  // console.log(`props`, props)
  const result = Object.create(null)
  let string = ''

  result['flex-direction'] = props.direction
  result['flex-wrap'] = props.wrap
  result['justify-content'] = props.justifyContent
  result['align-items'] = props.alignItems
  result['align-content'] = props.alignContent
  result['align-self'] = props.alignSelf
  result['flex-basis'] = props.flexBasis

  for (let key of Object.keys(result)) {
    string += `${key}: ${result[key]};\n`
  }

  return string
}

export function camelCaseToString(str) {
  const normalStyle = (match) => ` ${match}`
  let res = str.replace(REGEX, normalStyle)
  return res[0].toUpperCase() + res.slice(1)
}
