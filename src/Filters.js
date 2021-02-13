const Filters = ({ name, popularity, handleChange }) => {

  return (
    <section className="filters">
      <div className="search-by-name-group">
        <label htmlFor="search-name">Search by name</label>
        <input
          name="name"
          value={ name }
          id="search-name"
          placeholder="search by name"
          onChange={ handleChange }
        />
      </div>
      <div className="sort-by-popularity-group">
        <label htmlFor="sot-by-popularity">Sort by popularity</label>
        <select
          name="popularity"
          value={ popularity }
          id="sort-by-popularity"
          onChange={ handleChange }
        >
          <option value='most popular' >Most Popular</option>
          <option value='least popular'>Least Popular</option>
        </select>
      </div>
    </section>
  )
}

export default Filters;