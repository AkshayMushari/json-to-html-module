export default function json2html(data) {
    // Generate table headers based on object keys
    const headers = ['Name', 'Age', 'Gender'];
  
    // Start building the table HTML string
    let html = '<table data-user="mushariakshay@gmail.com">';
    html += '<thead><tr>';
  
    // Create the table header row
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
  
    // Create the table body
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
  