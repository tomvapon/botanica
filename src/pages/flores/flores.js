import PageContent from '../../components/PageContent';
import data from './flores.json';
import './flores.css';

function Flores(props) {
    const flower = parseInt(props.value)
    const flower_info = data.flowers[flower]
    return (
        <div>
            <PageContent data={data} />
            <div className='concept-div'>
                <h1 className='title'>{flower_info.nombre} ({flower_info.nombre_cientifico})</h1>
                <div className='row'>
                    <div className='column'>
                        <p>{flower_info.descripcion}</p>
                        <table className='table-bordered'>
                            <thead className='thead'>
                                <tr>
                                    <th scope='col'>CARACTERÍSTICA</th>
                                    <th scope='col'>VALOR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fecha de siembra</td>
                                    <td>{flower_info.fecha_siembra}</td>
                                </tr>
                                <tr>
                                    <td>Periodo de floración</td>
                                    <td>{flower_info.fecha_floracion}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Si quieres extender la información sobre {flower_info.nombre} visita el siguiente <a className='extra' href={flower_info.extra}>enlace</a></p>
                    </div>
                    <div className='column'>
                        <img className='treeimage' src={flower_info.image} alt={flower_info.nombre} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flores;