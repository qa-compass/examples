class HelloWorldPlugin {
  apply(compiler) {
    // throw new Error('Aah')
    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World');
    });
  }
}

module.exports = {
  plugins: [
    new HelloWorldPlugin()
  ]
};

