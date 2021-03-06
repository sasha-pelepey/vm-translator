const {SubCommand} = require('./sub-command');
const {prettifyAssemblyCode} = require('../../tests/utils');

describe('SubCommand', () => {
  it('should be defined', () => {
    expect(new SubCommand()).toBeDefined();
  });

  describe('Method translate()', () => {
    it('should return assembly code which sub two last stack values', () => {
      const command = new SubCommand();
      const exactedCode = prettifyAssemblyCode(`
        // sub
        @SP
        M=M-1 // SP--
        A=M
        D=M // D = *y
        A=A-1 // x = SP-2
        M=M-D // *x = *x - *y 
      `);

      const resultCode = prettifyAssemblyCode(command.translate());

      expect(resultCode).toBe(exactedCode);
    });
  });
});
