import PageContent from '../../components/PageContent';
import data from './arboles.json';
import './arboles.css';

function Arboles(props) {
    const tree = parseInt(props.value)
    const tree_info = data.trees[tree]
    return (
        <div>
            <PageContent data={data} />
            <div className='concept-div'>
                <h1 className='title'>{tree_info.nombre} ({tree_info.nombreCientifico})</h1>
                <div className='row'>
                    <div className='column'>
                        <p>{tree_info.descripcion}</p>
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
                                    <td>{tree_info.fechaSiembra}</td>
                                </tr>
                                <tr>
                                    <td>Fruto</td>
                                    <td>{tree_info.fruto}</td>
                                </tr>
                                <tr>
                                    <td>Tipo de cosecha</td>
                                    <td>{tree_info.tipoCosecha}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Si quieres extender la información sobre {tree_info.nombre} visita el siguiente <a className='extra' href={tree_info.extra}>enlace</a></p>
                    </div>
                    <div className='column'>
                        <img className='treeimage' src={tree_info.image} alt={tree_info.nombre} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arboles;