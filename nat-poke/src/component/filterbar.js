

const filterbar = (props) => {
    return (
        <form>
            <input type="text" placeholder ="search!"
            value={props.filteredSearch} onChange={
                (e) => props.setFilterSearch(e.target.value)} />
        </form>
    )
}


export default filterbar
