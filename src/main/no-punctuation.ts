export class NoPunctuation {

  private string = '';
  
  constructor(string: string) {
    this.string = string;
  }

  build(): string {
    return this.string;
  }

  replaceManyWhiteSpacesTogetherForOnlyOne(): NoPunctuation {
    this.string = this.string.replace(/\s{2,}/g, ' ');
    return this;
  }
}
