import { PropTypes } from "prop-types"
export const ReportDetail = ({reports = []}) => {
    return (

        <tr >
            <td>{reports.territory_name}</td>
            <td>{reports.publisher_name}</td>
            <td>{reports.date_admission}</td>
            <td>{reports.date_departure}</td>
            <td>{reports.subterritory_name}</td>
        </tr>
        
    )
}

ReportDetail.propTypes = {
    reports: PropTypes.object.isRequired
}

