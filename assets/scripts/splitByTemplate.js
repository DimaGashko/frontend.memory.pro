import chunk from 'lodash/chunk';

export default function splitAndFormatByTemplate(template, data, sign = 'X') {
  const dataInItem = template.split(sign).length - 1;

  return chunk(data, dataInItem).map(chunk => {
    let res = template;

    chunk.forEach(data => (res = res.replace(sign, data)));

    return res;
  });
}
