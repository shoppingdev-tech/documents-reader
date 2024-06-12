export function isEmpty(value: string | null | undefined) {
  return (
    value === null ||
    value === '' ||
    value === undefined ||
    (typeof value === 'string' && value.replace(/^[ ]+|[ ]+$/g, '') === '')
  );
}

export function getUserAvatarLetter(str: string) {
  let string = str.replace(/[^A-Z0-9]+/gi, ' ');
  let name = string.split(' ');
  let finalName;
  if (name?.length > 1) {
    finalName = name[0]?.charAt(0) + '' + name[1]?.charAt(0);
  } else {
    finalName = name[0]?.charAt(0);
  }
  return finalName.toUpperCase();
}
