import { PropTypes } from "prop-types";
import { ReportDetail } from "./ReportDetail";
import React from 'react';

export const ReportGrid = ({ reports = [] }) => {
    /*const exportPDF = () => {
        const input = document.getElementById('table-to-export');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4'); // Crea un nuevo documento PDF
                const imgWidth = 210; // Ancho de la página A4 en mm
                const imgHeight = canvas.height * imgWidth / canvas.width; // Calcula la altura proporcional según el ancho
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // Agrega la imagen al documento PDF
                pdf.save('table.pdf'); // Guarda el documento PDF
            });
    }*/

    return (
        <>
        <table id="table-to-export"  className="table table-sm table-hover table-striped">
            <thead>
                <tr>
                    <th>Nombre Grupo </th>
                    <th>Nombre Publicador</th>
                    <th>Fecha Entrega </th>
                    <th>Fecha Devuelta </th>
                    <th>Nombre Territorio </th>
                </tr>
            </thead>
            <tbody>
                {reports.map( report => {
                    return <ReportDetail  reports={report} key={Math.random()}/>
                })}
                
                
            </tbody>
        </table>
        </>
    );
};

ReportGrid.propTypes = {
    reports: PropTypes.array.isRequired
};