class HelloWorldPlugin {
  apply(compiler) {
    // throw new Error('Aah')
    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World');
    });
  }
}
// Works for ng build.
// Release the webpack plugin for Angular. How to configure angular.json etc. is up to the user,
// but have example project showing this option here. Or just eject example if builder is too difficult.
// TODO Maybe try eject first? Cannot eject since ng6
// TODO Angular 18 is super new, maybe wait a little bit. the lib I installed is in beta phase

module.exports = {
  plugins: [
    new HelloWorldPlugin()
  ]
};

