import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { ReportForm } from "./ReportForm";
import { getChildByTerritory } from "../services/HelenaSubTerritoriesServices";
import { findAllTerritories } from "../services/HelenaTerritoryServices";
import { ReportGrid } from "./ReportGrid";
import { findAllReports,getReportLista } from "../services/HelenaServices";
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const ReportApp = ({ title }) => {
    const [territories, setTerritories] = useState([]);
    const [subterritories, setSubterritories] = useState([]);
    const [reports, setReports] = useState([]);

    var territorySelected = 0;

    const getReports = async () => {
        const result = await findAllReports();
        setReports(result.data._embedded.reportses);
    };
    
    const getTerritories = async () => {
        const result = await findAllTerritories();
        setTerritories(result.data._embedded.territories);
    };
    
    const getChildSubTerr = async () => {
        const result = await getChildByTerritory(territorySelected);
        setSubterritories(result.data);
    };

    useEffect(() => {
        getTerritories();
    }, []);

   /* useEffect(() => {
        getChildSubTerr();
    }, [territorySelected]);*/

    useEffect(() => {
        getReports();
    }, []);

    const handlerAdd = async (report) => {
         /*//Nombre del territorio
        const reuslt = await findByIdTerritories(report.territory_id);
        territory_name = reuslt.data;
        //Numero de veces afectado 
        const response = await getReport(report);*/

        const result = await getReportLista(report);
        console.log(result)
        setReports(result.data);
    };
    
    const handlerTerritorySelected = async (territory_id) => {
        territorySelected = territory_id;
        if (territorySelected > 0) {
            getChildSubTerr();
        }
    };

    const exportPDF = () => {
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
    }


    return (
        
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col-md-6">
                    <h2>{title}</h2>
                </div>
                <div className="col-md-6">
                    <button className= "btn btn-info" onClick={exportPDF}>Exportar a PDF</button>
                </div>
            </div>
            <div className="row">
                <ReportForm 
                    territories={territories} 
                    handlerTerritorySelected={handlerTerritorySelected} 
                    subterritories={subterritories} 
                    handlerAdd={handlerAdd}
                />
                <div className="overflow-auto mt-3 p-3" style={{ height: '80vh' }}>
                    {reports.length > 0 ? (
                        <ReportGrid reports={reports} />
                    ) : (
                        <div className="alert alert-warning">No hay informes en el sistema.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

ReportApp.propTypes = {
    title: PropTypes.string.isRequired
};