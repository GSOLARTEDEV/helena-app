import { PropTypes } from "prop-types";
import { ReportDetail } from "./ReportDetail";
import React from 'react';

export const ReportGrid = ({ reports = [] }) => {

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