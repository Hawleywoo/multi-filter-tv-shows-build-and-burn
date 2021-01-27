const Filters = ({ name, handleChange }) => {

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
    </section>
  )
}

export default Filters;