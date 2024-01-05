export const Button = ({ label, textInputValue, colorInputValue, resetCard, resetUpdade }) => {
    
    const handlePrintStylizedParagraph = () => {
        resetUpdade(true)
        alert(`A label desse botão é: ${ label }`)
    }

    return (
        <>
            <button onClick={handlePrintStylizedParagraph}>
                {label}
            </button>

            {resetCard && <p style={{ color: colorInputValue, textTransform: 'uppercase' }} >{ textInputValue } </p>}
        </>
    )
}  