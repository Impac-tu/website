import Help from './Help'

const Stats = () => {
    return (
        <section className='stats-wrapper'>
        <div className="stats-content reveal">
            <div className='title'>
                <h1>DESDE 2018</h1>
            </div>
            <div className='stats'>
                <div className='card one'>
                    <h1 className='counter' data-target='17'>0</h1>
                    <h2>Famílias Ajudadas</h2>
                </div>
                <div className='card two'>
                    <h1 className='counter' data-target='6'>0</h1>
                    <h2>Casas reabilitadas</h2>
                </div>
                <div className='card three'>
                    <h1 className='counter' data-target='3'>0</h1>
                    <h2>Casos Jurídicos</h2>
                </div>
            </div>
        </div>
        <Help/>
        </section>
    )
}

export default Stats;