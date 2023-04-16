import PageContent from '../../components/PageContent';
import data from './Concepts.json';
import './Concepts.css';

function Concepts() {
    return (
        <div>
            <PageContent data={data} />
            <div className='concept-div'>
                <p className="page-body">{data.extra}</p>
                <ul>
                    {data.list.map(BuildList)}
                </ul>
            </div>
        </div>
    )
}

function BuildList(lista) {
    return (
        <li>{lista}</li>
    )
}

export default Concepts;