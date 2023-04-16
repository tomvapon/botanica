import './PageContent.css'

function PageContent(props) {
    const content = props.data;
    return (
        <div className='page-div'>
            <h1 className="page-title">{content.title}</h1>
            <p className="page-body">{content.body}</p>
        </div>
    )
}

export default PageContent;