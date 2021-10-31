const Description = ({description,color}) => {
    return (
        <div className="py-6 text-base">
            <p className='pb-6'>{description}</p>
            <div>
                <ul className="list-disc pl-4 pt-3">
                <li className='pb-3'>Colour Shown: {color}</li>
                <li>Style: DM6435-222</li>
                </ul>
            </div>
        </div>
    )
}
export default Description