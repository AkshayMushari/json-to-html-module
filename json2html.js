export default function json2html(data) {
  const headers = ['Name', 'Age', 'Gender'];
  let html = '<table data-user="mushariakshay@gmail.com">';
  html += '<thead><tr>';

  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead>';

  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
