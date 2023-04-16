import PageContent from '../../components/PageContent';
import './Home.css'
import data from './Home.json'

function Home() {
    return (
        <PageContent data={data} />
    )
}

export default Home;