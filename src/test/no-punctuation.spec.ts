import { NoPunctuation } from '../main/no-punctuation';

describe('NoPunctuation', () => {

  it('should replace common accented characters for their respective non accented version.', () => {
    expect(new NoPunctuation('A peça foi fantástica.').replaceCommonAccentedCharacters().build()).toEqual('A peca foi fantastica.');
    expect(new NoPunctuation('O trânsito não melhora.').replaceCommonAccentedCharacters().build()).toEqual('O transito nao melhora.');
    expect(new NoPunctuation('O tráfego aéreo é intenso.').replaceCommonAccentedCharacters().build()).toEqual('O trafego aereo e intenso.');
    expect(new NoPunctuation('Observe esses exemplos: Acórdão; Bênção; Órfão; Órgãos; Sótão.').replaceCommonAccentedCharacters().build()).toEqual('Observe esses exemplos: Acordao; Bencao; Orfao; Orgaos; Sotao.');
  });

  it('should identify more than one white spaces together and replace them for only one white space.', () => {
    expect(
      new NoPunctuation('This  is   a unit     test  !')
        .replaceManyWhiteSpacesTogetherForOnlyOne()
        .build()
    )
    .toEqual('This is a unit test !');
  });
});
