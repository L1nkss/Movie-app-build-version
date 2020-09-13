class GenreAdapter {
  static addIconField(values) {
    return values.map((value) => {
      return { ...value, icon: "fas fa-dot-circle", label: value.name };
    });
  }
}

export default GenreAdapter;
