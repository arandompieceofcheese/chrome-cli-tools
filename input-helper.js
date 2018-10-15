//This is NOT safe. Don't use this.
var awaiting = [];
process.stdin.on('data', d => awaiting.pop()(d.toString()));

module.exports = function(prompt){
  process.stdout.write(prompt + ' > ');
  return new Promise(resolve => awaiting.push(resolve));
}