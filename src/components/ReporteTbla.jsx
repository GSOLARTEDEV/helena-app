import React from 'react';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const ReporteTbla = ({ title }) => {
  class ExportPDF2 extends React.Component {
    exportPDF = () => {
      const input = document.getElementById('table-to-export');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save('table.pdf');
        });
    }

    render() {
      return (
        <div>
          <table id="table-to-export">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>jane@example.com</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.exportPDF}>Export to PDF</button>
        </div>
      );
    }
  }

  return <ExportPDF2 />;
};

ReporteTbla.propTypes = {
  title: PropTypes.string.isRequired
};
