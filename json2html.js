// json2html.js
export default function json2html(data) {
  // Generate the HTML table with the specified format
  let html = '<table data-user="mushariakshay@gmail.com">';
  html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  html += '<tbody>';

  // Iterate over each object in the array and create table rows
  data.forEach(row => {
    html += '<tr>';
    html += `<td>${row.Name || ""}</td>`;
    html += `<td>${row.Age || ""}</td>`;
    html += `<td>${row.Gender || ""}</td>`;
    html += '</tr>';
  });

  html += '</tbody></table>';
  return html;
}
