export default class CastAdapter {
  static adaptValues(values) {
    return values.map((value) => this.adaptValue(value));
  }

  static adaptValue(value) {
    return {
      character: value.character,
      id: value.id,
      name: value.name,
      profilePath: value.profile_path,
    };
  }
}
