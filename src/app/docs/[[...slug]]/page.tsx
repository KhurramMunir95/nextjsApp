export default function Docs({ params } : { params: { slug: string[] }} ) {
    if(params.slug?.length > 1) {
        return (
            <h1>{params.slug[0]} and { params.slug[1] }</h1>
        )
    } else if(params.slug?.length === 1) {
        return <h1>{params.slug[0]}</h1>
    }

    return <h1>Documentation</h1>
 }