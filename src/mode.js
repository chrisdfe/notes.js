// import modes from './raw/modes';

// // TODO - pluggable modes.
// class Mode() {

//   constructor(handle, key = 'C') {
//     if (!modes[handle]) {
//       throw new Error(`mode '${handle}' is not defined.`);
//     }

//     this.mode = modes[handle];
//     this.handle = handle;
//     this.key = key;
//     _.assign(this, this.mode);
//   }

//   notes() {

//   }

//   /*
//   chromaticAll() {
//     _.chain(notes)
//       .reduce((total, rootNote) => (
//         _.assign(total, { [rootNote]: chromatic(rootNote) })
//       ), {})
//       .value()
//   }
//   */

//   static find(handle) { }
//   static findByName(nane) { }
//   static register() { }

//   // Validate presence of name and intervals
//   static validate(mode) { }
// }
