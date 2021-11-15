import { isValid } from "Utils/Validators";

export default class BaseTransform {
  fields = {};

  constructor(params) {}

  appendFields(params = {}) {
    for (const key in this.fields) {
      this[key] =
        params.hasOwnProperty(key) && isValid(params[key])
          ? params[key]
          : this.fields[key];
    }
  }

  toObject() {
    const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    return keys.reduce((object, key) => {
      object[key] = this[key];
      return object;
    }, {});
  }
}
