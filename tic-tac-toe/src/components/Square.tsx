

interface ICreateNoteProps {
    onClick: () => void,
    value: string | null,
    winner: string | null
}

const Square: React.FC<ICreateNoteProps> = ({ value, winner, onClick }) => {

    if (!value) {
        return <button 
            onClick={onClick} 
            disabled={Boolean(winner)} 
            className='board-square'
        />
    }

    return (
        <button 
            disabled
            className={`board-square square_${value}`}
        >{value}</button>
    )
}

export default Square;