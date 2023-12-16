const capitalize = (str) => {
  if (typeof str !== 'string' || !str) return str
  return str.charAt(0).toLowerCase() + str.slice(1)
}
module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'animation name',
        },
        {
          type: 'input',
          name: 'key',
          message: 'animation key (optional default is name)',
        },
      ])
      .then(({ name, key }) => ({
        name,
        lowerName: capitalize(name),
        key: capitalize(key || name),
      }))
  },
}
