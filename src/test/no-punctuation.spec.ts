import { NoPunctuation } from '../main/no-punctuation';

describe('NoPunctuation', () => {

  it('should identify more than one white spaces together and replace them for only one white space.', () => {
    expect(
      new NoPunctuation('This  is   a unit     test  !')
        .replaceManyWhiteSpacesTogetherForOnlyOne()
        .build()
    )
    .toEqual('This is a unit test !');
  });
});
