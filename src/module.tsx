export function Module() {
  return (
    <section id="top_section">
      <input
        type="search"
        id="inputSearch"
        onChange={(event) => this.setValue(event.target.value)}
        placeholder={this.getValue()}
      />
      <input id="buttonSearch" type="button" value="Search" onClick={getExactInfo} />
    </section>
  );
}
