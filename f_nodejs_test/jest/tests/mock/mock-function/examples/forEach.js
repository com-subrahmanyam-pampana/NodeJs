
/*items is an array and callback function iterates */
export function forEach(items, callback) {
    for (const item of items) {
      callback(item);
    }
  }