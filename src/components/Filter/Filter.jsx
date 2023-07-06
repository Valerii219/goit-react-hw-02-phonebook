const Filter= ({onChangeFilter, filter}) =>(
<div>
    <label>Find contacts by name </label>
<input type="text" 
name="filter"
onChange={onChangeFilter}
value={filter}
/>

</div>)



export default Filter;

